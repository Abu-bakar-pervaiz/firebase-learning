import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDibGVYUPfrdV0bQuvRikBnR6xt3lmuGz8",
    authDomain: "fir-learning-e6ab1.firebaseapp.com",
    projectId: "fir-learning-e6ab1",
    storageBucket: "fir-learning-e6ab1.appspot.com",
    messagingSenderId: "1035125392340",
    appId: "1:1035125392340:web:0e2733145f618368eb0c41",
    measurementId: "G-06QBX7WXL9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const db = firebase.firestore();
  export const storage = firebase.storage();
  export const auth = firebase.auth();