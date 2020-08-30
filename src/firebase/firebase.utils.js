import firebase from 'firebase/app';
import 'firebase/auth';
// import firestore from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBjw0CMVv_ggwyOJOuYOFxlYa0StjXuaEo",
    authDomain: "home-hub-2e7aa.firebaseapp.com",
    databaseURL: "https://home-hub-2e7aa.firebaseio.com",
    projectId: "home-hub-2e7aa",
    storageBucket: "home-hub-2e7aa.appspot.com",
    messagingSenderId: "439241234742",
    appId: "1:439241234742:web:fea2169c24e0973ad1fb97"
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


// auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
//     const errorCode = error.code;
//     const errorMessage = error.message;
// });


// current user

// const user = auth.currentUser;

// if(user) {

// } else {
    
// }


export default firebase;