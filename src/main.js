import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from "firebase";
import VueTextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueTextareaAutosize)

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAYXrFecJmTqCyjJMbwoslFTBkx6v9N79Y",
  authDomain: "vue-cal-e4bc7.firebaseapp.com",
  projectId: "vue-cal-e4bc7",
  storageBucket: "vue-cal-e4bc7.appspot.com",
  messagingSenderId: "727976140262",
  appId: "1:727976140262:web:9376a3880dccf8f88c4a27"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
