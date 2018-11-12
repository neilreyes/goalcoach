import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCB20RMWZVV-lJDC0LRP8GuIPQkm4s6KHc",
    authDomain: "goalcoach-c4ebe.firebaseapp.com",
    databaseURL: "https://goalcoach-c4ebe.firebaseio.com",
    projectId: "goalcoach-c4ebe",
    storageBucket: "goalcoach-c4ebe.appspot.com",
    messagingSenderId: "443768266036"
};

const firebaseApp = firebase.initializeApp(config);

export { firebaseApp }