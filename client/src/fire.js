import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyClGPl1k2S5KRbnauxc9oG-99_yjMgluWg",
    authDomain: "grab-and-go-dev-87389.firebaseapp.com",
    projectId: "grab-and-go-dev-87389",
    storageBucket: "grab-and-go-dev-87389.appspot.com",
    messagingSenderId: "127157710504",
    appId: "1:127157710504:web:f5d8e3d435d799a4155c9d"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;