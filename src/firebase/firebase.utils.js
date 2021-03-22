import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth' ;

const config = {
apiKey: "AIzaSyC7I9i_Cm0WMYz_dVy0kXn1TCv1QP6kfd4",
authDomain: "crown-db-1251f.firebaseapp.com",
projectId: "crown-db-1251f",
storageBucket: "crown-db-1251f.appspot.com",
messagingSenderId: "298101678515",
appId: "1:298101678515:web:21553e030a905ddf0e2bc6",
measurementId: "G-X9WW560WLS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;