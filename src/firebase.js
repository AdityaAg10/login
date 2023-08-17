import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyASfqK_mwxTotYiWxpHgj9SBvaxu3PZi_g",
  authDomain: "sidlogin-ed58a.firebaseapp.com",
  projectId: "sidlogin-ed58a",
  storageBucket: "sidlogin-ed58a.appspot.com",
  messagingSenderId: "933955977664",
  appId: "1:933955977664:web:76b4baad4522d2ee9d8825"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app

