<template>
    <div>
        <nav>
            <div class="nav-wrapper blue-grey darken-3">
            <router-link class="brand-logo teal-text text-lighten-3" to="/">Corleone</router-link>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><router-link to="/">Home</router-link></li>
                <li v-if="user.loggedIn"><router-link to="/appointments">Appointments</router-link></li>
                <li v-if="user.loggedIn && userData && userData.isAdmin"><router-link to="/admin">Admin Panel</router-link></li>
                <li v-if="user.loggedIn"><router-link to="/profile">Profile<span v-if="user.loggedIn && userCredentials && !userCredentials.emailVerified" class="badge teal lighten-3 white-text">!</span></router-link></li>
                <!-- <transition-group name="fade"> -->
                  <li key="login" v-if="!user.loggedIn"><LoginButton modalTitle="Login" buttonText="Login" >  
                  </LoginButton></li>
                  <li key="signup" v-if="!user.loggedIn"><SignUpButton modalTitle="Register" buttonText="Sign Up" >  
                  </SignUpButton></li>
                  <li key="logout" v-if="user.loggedIn"><LogoutButton/></li>
                <!-- </transition-group> -->
            </ul>
            </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
            <i class="material-icons close-trigger grey-text text-lighten-1" @click="closeSidenav">close</i>
            <li className="sidenav-close"><router-link to="/">Home</router-link></li>
            <li v-if="user.loggedIn" className="sidenav-close"><router-link to="/appointments">Appointments</router-link></li>
            <li v-if="user.loggedIn && userData && userData.isAdmin" className="sidenav-close"><router-link to="/admin">Admin Panel</router-link></li>
            <li v-if="user.loggedIn" className="sidenav-close"><router-link to="/profile">Profile<span v-if="user.loggedIn && userCredentials && !userCredentials.emailVerified" class="badge teal lighten-3 white-text">!</span></router-link></li>
            <transition-group name="fade">
              <li key="login-sidenav" v-if="!user.loggedIn"><LoginButton modalTitle="Login" buttonText="Login" >  
                  </LoginButton></li>
              <li key="signup-sidenav" v-if="!user.loggedIn"><SignUpButton modalTitle="Register" buttonText="Sign Up" >  
                  </SignUpButton></li>
              <li key="logout-sidenav" v-if="user.loggedIn" className="sidenav-close"><LogoutButton/></li>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import LoginButton from './login/LoginButton'
import SignUpButton from './signup/SignUpButton'
import LogoutButton from './login/LogoutButton'

import { mapGetters } from "vuex";

export default {
    components: {
        LoginButton,
        SignUpButton,
        LogoutButton
    },
    methods: {
      closeSidenav: () => {
        const sidenav =M.Sidenav.getInstance(document.querySelector('.sidenav'));
        sidenav.close();
      }
    },
    // when the instance of the component is created,
    // we initialize the materialize mobile menu
    created(){
        document.addEventListener('DOMContentLoaded', function() {
        let elem = document.querySelector('.sidenav');
        let instances = M.Sidenav.init(elem, {});  
        });
    },
    computed: {
    ...mapGetters({
      // map `this.user` to `this.$store.getters.user`
      user: "user",
      userCredentials: "userCredentials",
      userData: "userData"
    })
  } 
}
</script>

<style lang="scss">
nav{
  li > .router-link-exact-active {
    color: $primary;
  }
  li > button{
    margin: 0 15px;
  }

  .brand-logo{
    left: 15px;
  }
}

.badge{
    min-width: 0 !important;
    border-radius: 5px;
    margin-left: 3px !important;
}

.sidenav{
  overflow: initial !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 97 !important;
  border-radius: 0 12px 12px 0;
  height: 100% !important;

  .close-trigger{
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
  }

  li > a {
    font-size: 20px !important;
  }

  li > button{
    font-size: 15px !important;
    font-weight: 15;
  }
}

.sidenav-overlay{
  z-index: 96 !important;
}
</style>