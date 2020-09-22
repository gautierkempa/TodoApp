import * as firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyAGp1uTkD3HBh8d7WK6a-pD5ZLhcCrpexQ",
    authDomain: "nuxttodoapp1.firebaseapp.com",
    databaseURL: "https://nuxttodoapp1.firebaseio.com",
    projectId: "nuxttodoapp1",
    storageBucket: "nuxttodoapp1.appspot.com",
    messagingSenderId: "804996302099",
    appId: "1:804996302099:web:7977a0f19b7b31d68786e6",
    measurementId: "G-P2RQMM00H3"
  };

  var app = null;

  if (!firebase.apps.length){
      app = firebase.initializeApp(firebaseConfig);
  }
 