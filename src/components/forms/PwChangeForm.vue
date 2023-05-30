<template>
    <div class="row">
        <form id="pwchange-form" class="col s12" @submit.prevent="verifyAndSendEmail">
        <div class="row">
            <div class="input-field col s12 center-align">
                <input type="password" id="pwchange-password" required>
                <label for="pwchange-password">Password</label>
            </div>
        </div>
        <button class="waves-effect waves-light btn-small left teal lighten-3">{{ buttonText }}</button>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
    data(){
        return{
            buttonText: 'Send E-mail'
        }
    },
    methods: {
        handleUpdate: function() {
        this.$emit('update-parent');
        },
        verifyAndSendEmail: function(){

            const pwChangeForm = document.querySelector('#pwchange-form');
            // user information
            let user = firebase.auth().currentUser;
            const password = pwChangeForm['pwchange-password'].value;

            const credential = firebase.auth.EmailAuthProvider.credential(
                user.email, 
                password
            );

            user.reauthenticateWithCredential(credential).then(function() {
                // User re-authenticated.
                if(user.emailVerified){
                    firebase.auth().sendPasswordResetEmail(user.email).then(function() {
                    // Email sent.
                        console.log('E-mail sent');
                    }).catch(function(error) {
                    // An error happened.
                        console.log(error.message);
                    });
                }else{
                    console.log('You must verify your email address first!');
                }

            }).then(() => {
                // reset form
                pwChangeForm.reset();

                // close modal
                this.handleUpdate();
            }).catch(function(error) {
                // An error happened.
                console.log(error.message);
            });
        }
    }
}
</script>

<style>

</style>