import firebase from 'firebase/app'
import { createStore } from 'vuex'

const store = createStore({
  namespaced: true,
  state: {
    user: {
      loggedIn: false,
      data: {
        credentials: null,
        userData: null
      }
    },
    showLoginModal: false,
    showSignUpModal: false,
    showSignUpInfo: false,
    reservations: [],
    nextReservations: []
  },
  getters: {
    user(state){
      return state.user
    },
    userCredentials(state){
        return state.user.data.credentials
    },
    userData(state){
        return state.user.data.userData
    },
    loginModal(state){
      return state.showLoginModal
    },
    signUpModal(state){
      return state.showSignUpModal
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_APPOINTMENT_CODE(state, code){
      state.user.data.userData.currentAppointmentCode = code;
    },
    updateUserFirstName(state, firstName){
      if(firstName){
        state.user.data.userData.firstName = firstName;
      }
    },
    updateUserLastName(state, lastName){
      if(lastName){
        state.user.data.userData.lastName = lastName;
      }
    },
    updateUserPhone(state, phone){
      if(phone){
        state.user.data.userData.phone = phone;
      }
    },
    toggleLogin(state){
      state.showLoginModal = !state.showLoginModal;
    },
    toggleSignUp(state){
      state.showSignUpModal = !state.showSignUpModal;
    },
    setReservations: function (state, data) {
      state.reservations = data;
    },
    setNextReservations: function (state, data) {
      state.nextReservations = data;
    }
  },
  actions: {
    // user
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        const db = firebase.firestore();
        
        db.collection('users').doc(user.uid).get().then(doc => {
          const data = doc.data();
          console.log(user); 

          commit("SET_USER", {
            credentials: user,
            userData: data
          });
        }).catch(err => console.log(err.message));    
      } else {     
        commit("SET_USER", {});
      }     
    },
    async getReservations({commit}) {
      const db = firebase.firestore();
      let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      let bookingsRef = db.collection("details").where('date', '>', yesterday);
      let bookings = await bookingsRef.get();
      let reservations = [];
      bookings.docs.forEach(function (doc) {
          reservations.push(doc.data());
      });
      commit('setReservations', reservations);
    },
    async getNextReservations({commit}) {
      const db = firebase.firestore();
      let bookingsRef = db.collection("details").where('date', '>', new Date());
      let bookings = await bookingsRef.get();
      let reservations = [];
      bookings.docs.forEach(function (doc) {
          let detail = doc.data();
          reservations.push({
              name: detail.name,
              phone: detail.phone,
              date: new Date(detail.date.seconds * 1000).toLocaleString(),
              code: detail.code
          });
      });
      commit('setNextReservations', reservations);
    },
    create({ commit }, booking) {
      const db = firebase.firestore();
      let code = (booking.date.getTime() / 1000) + Math.floor((Math.random() * 10) + 1).toString();
      // user collection
      db.collection('users').doc(booking.uid).update({
        currentAppointmentCode: code
      }).then(() => {
        commit("SET_APPOINTMENT_CODE", code);
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
      booking.code = code;
      // details
      db.collection('details').doc(booking.uid).set({
        name: booking.name,
        email: booking.email,
        phone:booking.phone,
        date: booking.date,
        code: code
      }).then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
      return code;
    },
    async cancel({ dispatch }, booking) {
      let detailRef = await firebase.firestore().collection('details').where('code', '==', booking.code).get();
      let id = detailRef.docs[0].id;
      await firebase.firestore().collection('details').doc(id).delete();
      dispatch('getNextReservations');
      dispatch('getReservations');
    }
  }
})

export default store