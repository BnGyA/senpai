import firebase from 'firebase'
import 'firebase/firestore'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;


let app = '';


// Initialize Firebase
var config = {
    apiKey: "AIzaSyBcUjFOnnh4xDFW4qk9ROzHy0EB31UBdtU",
    authDomain: "todo-14312.firebaseapp.com",
    databaseURL: "https://todo-14312.firebaseio.com",
    projectId: "todo-14312",
    storageBucket: "todo-14312.appspot.com",
    messagingSenderId: "706590722119"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() =>{
  if(!app){
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});

const db = firebase.firestore();
export default db;



