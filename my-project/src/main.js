import Vue from 'vue'
import App from './App.vue'
import './assets/css/styles.css'
import './assets/css/bootstrap.css'
// import router from './router';
//import store from './store';
import firebase from 'firebase';

Vue.config.productionTip = false

const config = {
apiKey: "AIzaSyCDGWDAx3DxHR_xwHvGgNT7eh1btHDYPxA",
authDomain: "portfolio-27b4f.firebaseapp.com",
databaseURL: "https://portfolio-27b4f.firebaseio.com",
projectId: "portfolio-27b4f",
storageBucket: "",
messagingSenderId: "310608396437",
appId: "1:310608396437:web:a33d25b3ace4a0d3"
}

firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  //store,
  render: h => h(App),
}).$mount('#app')
