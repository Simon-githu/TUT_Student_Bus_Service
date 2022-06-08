import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUC9KgRtLWy39UMDnFPpsJhYXahEidmTM",
  authDomain: "transport-booking-system-f8e83.firebaseapp.com",
  projectId: "transport-booking-system-f8e83",
  storageBucket: "transport-booking-system-f8e83.appspot.com",
  messagingSenderId: "486695117662",
  appId: "1:486695117662:web:03e7da64fdb15b204f65cf",
  measurementId: "G-9BDMJWTETV"
};
  
const app = initializeApp(firebaseConfig)
const auth = getAuth(app) 
const db = getFirestore(app)

export {db,auth}