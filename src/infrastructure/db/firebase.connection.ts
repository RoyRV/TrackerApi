import firebase from "firebase/compat/app"; // Import Firebase compat (version 9) for backward compatibility
import "firebase/compat/firestore"; // Import Firestore compat (version 9) for backward compatibility
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

// Get a Firestore instance
const firestore = app.firestore();
export default firestore;
