import firebase from "firebase";
require("@firebase/firestore");  

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDHjZvHRuxQOn_NeGpuyNRU5jo1u2TqX-0",
    authDomain: "e-library-dc01c.firebaseapp.com",
    projectId: "e-library-dc01c",
    storageBucket: "e-library-dc01c.appspot.com",
    messagingSenderId: "137552947541",
    appId: "1:137552947541:web:79dbb68f3f3614dad9e7dc",
    measurementId: "G-6646XJZJV9"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  