<template>
<div>
  <Navbar/>
  <router-view/>

  <Footer/>
  <SignUpModal modalTitle="Sign Up" buttonText="Sign Up"/>
  <LoginModal modalTitle="Login" buttonText="Login"/>
</div>
</template>

<script>
import Navbar from './components/Navbar'
import LoginModal from './components/login/LoginModal'
import SignUpModal from './components/signup/SignUpModal'
import Footer from './components/Footer'

import { mapGetters } from 'vuex'

export default {
  data(){
    return{
    }
  },
  components: {
    Navbar,
    LoginModal,
    SignUpModal,
    Footer
  },
  computed: {
    ...mapGetters({
      user: "user", 
      userCredentials: "userCredentials",
    })
  } 
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

p{
  font-size: 18px;
}

/* width */
::-webkit-scrollbar {
  width: 12px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #37474f;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $primary;
  border-radius: 10px;
  border: 3px solid transparent;
  background-clip: content-box;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: $secondary;
  border: 3px solid transparent;
  background-clip: content-box;
}
</style>