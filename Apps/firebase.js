import firebase from 'firebase';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXpk6o9I48zcoS7_cZD7ehrbtlz9t-XDs",
  authDomain: "digi-crop-dev.firebaseapp.com",
  projectId: "digi-crop-dev",
  storageBucket: "digi-crop-dev.appspot.com",
  messagingSenderId: "831295031044",
  appId: "1:831295031044:web:9b195af876f262985e3251",
  measurementId: "G-9KJ2BWH9P0"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  


export default firebase;
