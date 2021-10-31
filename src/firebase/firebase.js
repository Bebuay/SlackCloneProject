import firebase from "firebase";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDsG7RNafB_Wn4tUu3menoZ3a6_7vqAikU",
    authDomain: "slackcloneproject.firebaseapp.com",
    projectId: "slackcloneproject",
    databaseURL:"https://slackcloneproject-default-rtdb.europe-west1.firebasedatabase.app/",
    storageBucket: "slackcloneproject.appspot.com",
    messagingSenderId: "1028626426021",
    appId: "1:1028626426021:web:16e6b231d73763d917c54c",
    measurementId: "G-NHZSTX707R"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;