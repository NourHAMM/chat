import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firestore'
import * as firebaseui from 'firebaseui'

const firebaseConfig = {
    apiKey: "AIzaSyBJEd7hB-cQaID5kvVNSl1QS8PN-YUXUO0",
    authDomain: "chat-76b06.firebaseapp.com",
    databaseURL: "https://chat-76b06.firebaseio.com",
    projectId: "chat-76b06",
    storageBucket: "chat-76b06.appspot.com",
    messagingSenderId: "394820568349",
    appId: "1:394820568349:web:317e9971631043b56b0df4"

}

firebase.initializeApp(firebaseConfig)

const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase

Vue.prototype.$firebaseui = ui



export const db = firebase.firestore()