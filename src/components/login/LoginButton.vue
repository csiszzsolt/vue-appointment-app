<template>
  <button class="waves-effect waves-light btn-small teal lighten-3" @click="toggleLogin">{{ buttonText }}</button>
</template>

<script>
import {mapMutations} from "vuex"

export default {
    props: {
        buttonText: String 
    },
    methods: {
        ...mapMutations([
        'toggleLogin'  
        ]),
    }
}
</script>

<style>

</style>