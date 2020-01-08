import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
