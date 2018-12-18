import firebase from 'firebase'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAIwIM-udD0TYNqohsWevJw71mhamIN8gA",
    authDomain: "ninja-smoothies-61466.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-61466.firebaseio.com",
    projectId: "ninja-smoothies-61466",
    storageBucket: "ninja-smoothies-61466.appspot.com",
    messagingSenderId: "601748917258"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots: true})

/// export firestore database
export default firebaseApp.firestore() 