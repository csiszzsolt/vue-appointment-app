<template>
   <div class="row">
    <form id="login-form" class="col s12" @submit.prevent="login">
      <div class="row">
        <div class="input-field col s12 center-align">
            <input id="login-email" type="email" class="validate" required>
            <label for="login-email">E-mail</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 center-align">
            <input type="password" id="login-password" required>
            <label for="login-password">Password</label>
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
      
    }
  },
  props: {
    buttonText: String,
  },
  methods: { 
    handleUpdate: function() {
      this.$emit('update-parent');
      // console.log('emitting');
    },
    login: function() {
      const loginForm = document.querySelector('#login-form');
      const elem =M.Sidenav.getInstance(document.querySelector('.sidenav'));
      // user information
      const email = loginForm['login-email'].value;
      const password = loginForm['login-password'].value;

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {
        // console.log(data.user.emailVerified);
        
        // clear form after sign-up
        loginForm.reset();
        this.handleUpdate();

        // close sidenav, if it is open
        elem.close();
        // redirect to home page
        this.$router.replace({ name: "Home" });
      })
      .catch(err => alert(err.message))
    }
  }
}
</script>

<style lang="scss">
 /* label focus color */
   .input-field input[type=text]:focus + label,
   .input-field input[type=email]:focus + label,
   .input-field input[type=password]:focus + label,
    .input-field input[type=tel]:focus + label{
     color: $primary !important;
}
/* label underline focus color */
   .input-field input[type=text]:focus,
   .input-field input[type=email]:focus,
   .input-field input[type=password]:focus,
   .input-field input[type=tel]:focus {
     border-bottom: 1px solid $primary !important;
     box-shadow: none !important;
   }

   input.valid[type=email]:not(.browser-default){
    border-bottom: 1px solid $primary; 
    box-shadow: 0 1px 0 0 $primary;
   }

   /* icon prefix focus color */
   .input-field .prefix.active {
     color: $primary !important;
   }

    input.invalid:not([type]), input.invalid:not([type]):focus,
    input.invalid[type=text]:not(.browser-default),
    input.invalid[type=text]:not(.browser-default):focus,
    input.invalid[type=password]:not(.browser-default),
    input.invalid[type=password]:not(.browser-default):focus,
    input.invalid[type=email]:not(.browser-default),
    input.invalid[type=email]:not(.browser-default):focus,
    input.invalid[type=url]:not(.browser-default),
    input.invalid[type=url]:not(.browser-default):focus,
    input.invalid[type=time]:not(.browser-default),
    input.invalid[type=time]:not(.browser-default):focus,
    input.invalid[type=date]:not(.browser-default),
    input.invalid[type=date]:not(.browser-default):focus,
    input.invalid[type=datetime]:not(.browser-default),
    input.invalid[type=datetime]:not(.browser-default):focus,
    input.invalid[type=datetime-local]:not(.browser-default),
    input.invalid[type=datetime-local]:not(.browser-default):focus,
    input.invalid[type=tel]:not(.browser-default),
    input.invalid[type=tel]:not(.browser-default):focus,
    input.invalid[type=number]:not(.browser-default),
    input.invalid[type=number]:not(.browser-default):focus,
    input.invalid[type=search]:not(.browser-default),
    input.invalid[type=search]:not(.browser-default):focus,
    textarea.materialize-textarea.invalid,
    textarea.materialize-textarea.invalid:focus,
    .select-wrapper.invalid>input.select-dropdown,
    .select-wrapper.invalid>input.select-dropdown:focus {
    border-bottom: 1px solid $primary !important;
    box-shadow: 0 1px 0 0 $primary !important;
}

#login-form .row{
  margin-bottom: 0 !important;
}
</style>