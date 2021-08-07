import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBSHJKmJywR3ZIeUKt7nWpYKFc_5r6X4uI",
	authDomain: "crwn-db-6e093.firebaseapp.com",
	projectId: "crwn-db-6e093",
	storageBucket: "crwn-db-6e093.appspot.com",
	messagingSenderId: "575624499140",
	appId: "1:575624499140:web:bb6bef19b251909a3e1e91",
	measurementId: "G-VKYBBSPFQ5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
