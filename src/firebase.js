import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAQzcox3FqM1D_jCJkMGnpw9A1TEXqiTiQ",
    authDomain: "todoist-clone-5ddaf.firebaseapp.com",
    databaseURL: "https://todoist-clone-5ddaf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "todoist-clone-5ddaf",
    storageBucket: "todoist-clone-5ddaf.appspot.com",
    messagingSenderId: "175547245466",
    appId: "1:175547245466:web:02471a81a45dee89995023"
});

export { firebaseConfig as firebase }