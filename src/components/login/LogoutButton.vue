<template>
  <button class="waves-effect waves-light btn-small teal lighten-3" @click.prevent="logout">{{ buttonText }}</button>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return{
            buttonText: 'Logout'
        }
    },
    methods: {
        logout: function() {
            firebase.auth().signOut().then(() => {
                // redirect to the home page after logout
                this.$router.replace({ name: "Home" });
            })
        }
    }
}
</script>

<style>

</style>