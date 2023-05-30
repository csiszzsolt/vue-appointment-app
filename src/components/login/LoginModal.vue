<template>
    <div>
        <transition name="fade">
            <div class="modal-overlay1" v-if="showLogin" @click="toggleLogin"></div>
        </transition>
        <transition name="slide">
            <div class="custom-modal login-modal" v-if="showLogin">
                <h1>{{ modalTitle }}</h1>
                <LoginForm buttonText="Login" @update-parent="toggleLogin"/>
                <i class="material-icons close-trigger grey-text text-lighten-1" @click="toggleLogin">close</i>
            </div>
        </transition>
    </div>
</template>

<script>
import LoginForm from './LoginForm'

import { mapGetters, mapMutations } from 'vuex'

export default {
    props: {
        buttonText: String,
        modalTitle: String
    },
    data(){
        return {
            // showModal: false
        }
    },
    methods: {
        ...mapMutations([
        'toggleLogin'  
        ])
    },
    components: {
        LoginForm,
    },
    computed: {
    ...mapGetters({
      showLogin: 'loginModal'
    })
    } 
}
</script>

<style lang="scss">
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'montserrat', sans-serif;   
}

.modal-overlay1{
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 98;
    background-color: rgba(0,0,0,0.3);
}
// transition name
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.login-modal{
    max-width: 350px;
    button{
        margin-top: 1.5rem;
    }
}

.custom-modal{
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 95vw;
    background-color: white;
    border-radius: 12px;
    padding: 25px;

    h1{
        color: #222;
        font-size: 32px;
        font-weight: 900;
        margin-bottom: 15px;
    }

    p{
        color: #666;
        font-size: 19px;
        font-weight: 400;
        margin-bottom: 15px;
    }

    .close-trigger{
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
    }
}

.slide-enter-active, .slide-leave-active {
  transition: 0.4s ease;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(-50%) translateY(-140vh);
}

</style>