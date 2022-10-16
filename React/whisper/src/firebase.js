
import * as firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDN3rdOvICViQb_CBKJGk7cja6Z-Y5ZqfY",
  authDomain: "whisper-dccc5.firebaseapp.com",
  projectId: "whisper-dccc5",
  storageBucket: "whisper-dccc5.appspot.com",
  messagingSenderId: "320306458932",
  appId: "1:320306458932:web:d27380893b5e6d1ebef561"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);