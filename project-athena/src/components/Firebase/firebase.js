import app from 'firebase/app';
import 'firebase/auth';
import  'firebase/database';


// var firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMIAN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: REACT_APP_PROJECT_ID,
//     storageBucket: REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: REACT_APP_STORAGE_BUCKET,
//     appId: REACT_APP_APP_ID,
//     measurementId: REACT_APP_MESUREMENT_ID
//   };

var firebaseConfig = {
    apiKey: "AIzaSyDt5ws6okcEVlixeLY2XzJn705VnAOh2Eg",
    authDomain: "pr0jectathena.firebaseapp.com",
    databaseURL: "https://pr0jectathena.firebaseio.com",
    projectId: "pr0jectathena",
    storageBucket: "pr0jectathena.appspot.com",
    messagingSenderId: "380460838160",
    appId: "1:380460838160:web:cd46c9d948d82833940995",
    measurementId: "G-LE1NKMZQ5Y"
  };



  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
  // Initialize Firebase
  export default Firebase;
 


