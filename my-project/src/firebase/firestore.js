import firebase from 'firebase' 

const config = {
    apiKey: "AIzaSyCDGWDAx3DxHR_xwHvGgNT7eh1btHDYPxA",
    authDomain: "portfolio-27b4f.firebaseapp.com",
    databaseURL: "https://portfolio-27b4f.firebaseio.com",
    projectId: "portfolio-27b4f",
    storageBucket: "portfolio-27b4f.appspot.com",
    messagingSenderId: "310608396437",
    appId: "1:310608396437:web:a33d25b3ace4a0d3"
};

const settings = { timestampsInSnapshots: true };
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase