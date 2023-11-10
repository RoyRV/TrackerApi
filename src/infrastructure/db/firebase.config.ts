// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: `${process.env.FIREBASE_PROJECT_ID}`,
  authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
  storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  apiKey: process.env.FIREBASE_API_KEY,
  appId: process.env.FIREBASE_APP_ID,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

export default firebaseConfig;
  