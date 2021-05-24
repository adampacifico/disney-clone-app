import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDJitZpOpqxzOW2oGqdt7bRjq4CaR9qBwk",
  authDomain: "disney-clone-app-8fe71.firebaseapp.com",
  projectId: "disney-clone-app-8fe71",
  storageBucket: "disney-clone-app-8fe71.appspot.com",
  messagingSenderId: "875400391386",
  appId: "1:875400391386:web:418db96f53fbcb4fc753e3",
  measurementId: "G-1SC7TFP257",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
//   firebase.analytics();

export { auth, provider, storage };
export default db;
