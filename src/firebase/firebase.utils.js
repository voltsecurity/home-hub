import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


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
export const firestore = firebase.firestore();


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}


export const getUserProfileDocument = async (userAuth) => {
    if (!userAuth) return;

    try {
        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const doc = await userRef.get();
        const data = doc.data();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default firebase;