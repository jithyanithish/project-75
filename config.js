import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyC51ITyLXoGvh33pfbp9XiXdaQ6JMP22uQ",
  authDomain: "e-ride-19c37.firebaseapp.com",
  projectId: "e-ride-19c37",
  storageBucket: "e-ride-19c37.appspot.com",
  messagingSenderId: "178433223681",
  appId: "1:178433223681:web:5904f7f5477653cd12e400"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
