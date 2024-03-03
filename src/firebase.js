import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyClW67zkD0p0dqhhKI6il-Qru54S0Nstus",
  authDomain: "pharmacy-f4ac5.firebaseapp.com",
  projectId: "pharmacy-f4ac5",
  storageBucket: "pharmacy-f4ac5.appspot.com",
  messagingSenderId: "326522339594",
  appId: "1:326522339594:web:c4a364b74390732f1b7af3",
  measurementId: "G-E32QD9SLHR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const analytics = getAnalytics(app);
const storage=getStorage(app);
export { app, auth, db,storage ,analytics};


