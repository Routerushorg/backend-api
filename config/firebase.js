const { initializeApp, getApps } = require("firebase/app");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = require("firebase/auth");
require("dotenv").config({ path: "env/.env" });

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const firebaseAuth = getAuth();

const SignUp = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(firebaseAuth, email, password);
  } catch (error) {
    console.error("Sign up failed:", error.message);
    throw new Error(error.message);
  }
};

const SignOut = async () => {
  try {
    await signOut(firebaseAuth);
  } catch (error) {
    console.error("Sign out failed:", error.message);
    throw new Error(error.message);
  }
};

module.exports = { firebaseAuth, SignUp, SignOut };
