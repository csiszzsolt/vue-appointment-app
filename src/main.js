import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'materialize-css'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfU4fQW03SfjZWxWZyLKrV-dI169AX-qU",
    authDomain: "web-app-3-7e38e.firebaseapp.com",
    projectId: "web-app-3-7e38e",
    storageBucket: "web-app-3-7e38e.appspot.com",
    messagingSenderId: "260622739836",
    appId: "1:260622739836:web:361423b9d860610ecf5cf9",
    measurementId: "G-94Q304LQP4"
};

// before anything else
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

createApp(App).use(store).use(router).mount('#app')