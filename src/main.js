import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyDdHGFikAeF9Ugam47j5gD2m9-UoDwnlvc",
  authDomain: "vue-and-calendar.firebaseapp.com",
  databaseURL: "https://vue-and-calendar.firebaseio.com",
  projectId: "vue-and-calendar",
  storageBucket: "vue-and-calendar.appspot.com",
  messagingSenderId: "470973817727",
  appId: "1:470973817727:web:e9811011246a375d90f04a"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
