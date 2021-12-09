import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCGy0ZTtRnPvi8PMzsnFmGt39dhZqpw_MQ",
    authDomain: "seven-sins-e3b50.firebaseapp.com",
    projectId: "seven-sins-e3b50",
    storageBucket: "seven-sins-e3b50.appspot.com",
    messagingSenderId: "536051043139",
    appId: "1:536051043139:web:48dfbd83adde11d3e07df6"
  }

 const app = firebase.initializeApp(firebaseConfig);

 export function formatDate(date) {
  return firebase.firestore.Timestamp.fromDate(date)
}

export const firestore = firebase.firestore(app)