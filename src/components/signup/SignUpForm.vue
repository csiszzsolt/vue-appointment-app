<template>
  <div class="row">
    <form id="signup-form" class="col s12" @submit.prevent="signUp">
      <!-- .prevent (event modifier) prevents the page from reloading after submitting this form -->
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate">
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate">
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="phone" type="tel" class="validate" pattern="\d*" title="Only numbers allowed" required>
          <label for="phone">Telephone</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 center-align">
            <input id="signup-email" type="email" class="validate" required>
            <label for="signup-email">E-mail</label>
        </div>
      </div>
      <div class="row">
        
        <div class="input-field col s12 center-align">
            <input type="password" id="signup-password" required>
            <label for="signup-password">Password</label>
        </div>
        <!-- <div class="input-field col s6 center-align">
            <input type="password" id="signup-password-confirm" required>
            <label for="signup-password-confirm">Confirm Password</label>
        </div> -->
      </div>
      <button class="waves-effect waves-light btn-small left teal lighten-3">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  data(){
    return {
      
    }
  },
  props: {
    buttonText: String,
  },
  methods:{
    handleUpdate: function() {
      this.$emit('update-parent');
    },
    signUp: function() {
      const signUpForm = document.querySelector('#signup-form');
      const elem =M.Sidenav.getInstance(document.querySelector('.sidenav'));
      // user information
      const email = signUpForm['signup-email'].value;
      const password = signUpForm['signup-password'].value;

      // async task
      firebase.auth().createUserWithEmailAndPassword(email, password)
      // promise (when the sign-up is complete)
      .then(cred => {
        cred.user.sendEmailVerification();

        return firebase.firestore().collection('users').doc(cred.user.uid).set({
          firstName: signUpForm['first_name'].value,
          lastName: signUpForm['last_name'].value,
          phone: signUpForm['phone'].value,
          isAdmin: false,
          currentAppointmentCode: null
        }).then(() => {
          // console.log(cred.user);
          // clear form after sign-up
          signUpForm.reset();
          this.handleUpdate();

          // close sidenav, if it is open
          elem.close();
          // redirect to home page
          this.$router.replace({ name: "Home" });
        });      
      })
      .catch(err => console.log(err.message));
    }
  }
}
</script>

<style lang="scss" scoped>
.row{
  margin-bottom: 0 !important;
}
</style>