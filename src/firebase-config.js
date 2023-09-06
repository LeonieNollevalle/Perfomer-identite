import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBn1o6lCxH5bBHt0a-HRDNafPW7HWyaQv0",
  authDomain: "performerlidentiter.firebaseapp.com",
  databaseURL: "https://performerlidentiter-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "performerlidentiter",
  storageBucket: "performerlidentiter.appspot.com",
  messagingSenderId: "773672937601",
  appId: "1:773672937601:web:b5c440520dbd2c8e6fc580",
  measurementId: "G-RPZ63KEV15"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
