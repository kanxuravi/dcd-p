import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
const config = {
    apiKey: "AIzaSyCuJ2llfTtde3oTIHyI0M6r-Gnoo3fVBgs",
    authDomain: "dcd-p-5ee23.firebaseapp.com",
    databaseURL: "https://dcd-p-5ee23.firebaseio.com",
    projectId: "dcd-p-5ee23",
    storageBucket: "dcd-p-5ee23.appspot.com",
    messagingSenderId: "895038007402"
  };

firebase.initializeApp(config);
firebase.firestore()
firebase.storage()

export default firebase