import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQOXgAnaPARHqLwXOOfsr2OVFv5JpmBc8",
  authDomain: "foodie-order-2e20a.firebaseapp.com",
  projectId: "foodie-order-2e20a",
  storageBucket: "foodie-order-2e20a.appspot.com",
  messagingSenderId: "802659396868",
  appId: "1:802659396868:web:0c30b644dce1fdff5a7451",
  measurementId: "G-L5ZH51766X",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
