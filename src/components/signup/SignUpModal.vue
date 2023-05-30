<template>
    <div>
        <transition name="fade">
            <div class="modal-overlay1" v-if="showSignUp" @click="toggleSignUp(); closeInfo();"></div>
        </transition>
        <transition name="slide">
            <div class="custom-modal signup-modal" v-if="showSignUp">
                <h1>{{ modalTitle }}</h1>
                
                <transition name="fade" mode="out-in">
                    <SignUpForm v-if="!info" buttonText="Sign Up" @update-parent="toggleSignUp"/>
                    <div v-else>
                        <i class="material-icons small">lock_outline</i>
                        <p><b>Privacy Policy</b></p>
                        <p>We highly value your privacy! Your data is protected by Google Firebase.</p>
                        <p>Your personal data is only used for authentication, and contact purposes.
                        You will only get a verification email from the system.
                        You will not have to unsubscribe from any newsletter.</p>
                        <p>You can delete your account anytime.</p>
                    </div>
                </transition>

                <i class="material-icons close-trigger grey-text text-lighten-1" @click="toggleSignUp(); closeInfo();">close</i>
                <transition name="fade">
                    <i v-if="!info" class="material-icons info-trigger grey-text text-lighten-1" @click="toggleInfo">info_outline</i>
                    <i v-else class="material-icons info-trigger grey-text text-lighten-1" @click="toggleInfo">arrow_back</i>
                </transition>
                
            </div>
        </transition>
    </div>
</template>

<script>
import SignUpForm from './SignUpForm'
import { mapGetters, mapMutations } from 'vuex'

export default {
    props: {
        buttonText: String,
        modalTitle: String
    },
    data(){
        return {
            info: false
        }
    },
    methods: {
        ...mapMutations([
        'toggleSignUp'  
        ]),
        toggleInfo(){
            this.info = !this.info;
        },
        closeInfo(){
            this.info = false;
        }
    },
    components: {
        SignUpForm
    },
    computed: {
    ...mapGetters({
      showSignUp: 'signUpModal'
    })
    }
}
</script>

<style lang="scss">
.signup-modal{
    max-width: 475px;
    min-height: 460px;
    overflow: hidden;
    button{
        margin-top: 1.5rem;
    }
    .info-trigger{
        position: absolute;
        right: 15px;
        bottom: 15px;
        cursor: pointer;
    }
}
.input-field{
    margin-bottom: 0 !important;
}
</style>