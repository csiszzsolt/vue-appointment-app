<template>
  <footer class="page-footer blue-grey darken-3">
    <div class="container">
        <div class="row">
            <div class="col l6 s12">
                <h5 class="white-text">Contact us</h5>
                <p class="grey-text text-lighten-4">#188852654</p>
                <p class="grey-text text-lighten-4"></p>
            </div>
            <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Routes</h5>
                <ul>
                    <li><router-link class="white-text" to="/">Home</router-link></li>
                    <li v-if="user.loggedIn"><router-link class="white-text" to="/appointments">Appointments</router-link></li>
                    <li v-if="user.loggedIn && userData && userData.isAdmin"><router-link class="white-text" to="/admin">Admin Panel</router-link></li>
                    <li v-if="user.loggedIn"><router-link class="white-text" to="/profile">Profile<span v-if="user.loggedIn && userCredentials && !userCredentials.emailVerified" class="badge teal lighten-3 white-text">!</span></router-link></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-copyright">
        <div class="container">
            © 2021
        </div>
    </div>
    </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
 data(){
     return{

    }
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
footer{
    li > .router-link-exact-active {
        color: $primary !important;
    }
}

.badge{
min-width: 0 !important;
border-radius: 5px;
margin-left: 3px !important;
float: none !important;
}
</style>