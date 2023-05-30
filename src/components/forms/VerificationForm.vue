<template>
   <div class="row">
    <form id="verification-form" class="col s12" @submit.prevent="verifyAndDelete">
      <div class="row">
        <div class="input-field col s12 center-align">
            <input type="password" id="verification-password" required>
            <label for="verification-password">Password</label>
        </div>
        <span class="badge red lighten-1 white-text left">!</span><span>Warning. If you proceed, all your data will be <b>deleted</b>.</span> 
      </div>
      <button class="waves-effect waves-light btn-small left red lighten-1">{{ buttonText }}</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  data(){
    return{
      buttonText: 'Delete'
    }
  },
  methods: { 
    handleUpdate: function() {
      this.$emit('update-parent');
    },
    verifyAndDelete: function() {
        const verificationForm = document.querySelector('#verification-form');
        // user information
        let user = firebase.auth().currentUser;
        const password = verificationForm['verification-password'].value;

        const credential = firebase.auth.EmailAuthProvider.credential(
            user.email, 
            password
        );

        // console.log(email, password, user);

        user.reauthenticateWithCredential(credential).then(function() {
            // User re-authenticated.
            
            // delete user data from the firestore database
            firebase.firestore().collection('users').doc(user.uid).delete().then(() => {
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
            
            // delete user from the auth database
            user.delete().then(function(){
                // User deleted.
                console.log('user deleted');
            }).catch(function(error) {
                // An error happened.
                alert(error.message);
            });

        }).then(() => {
            // reset form
            verificationForm.reset();
            // close modal
            this.handleUpdate();
            // redirect to home page
            this.$router.replace({ name: "Home" });
            })
            .catch(function(error) {
            // An error happened.
            alert(error.message);
        });        
    }   
  }
}
</script>

<style lang="scss" scoped>
.input-field{
    margin-bottom: 15px !important;
}

.row{
    margin-bottom: 0 !important;
}

</style>