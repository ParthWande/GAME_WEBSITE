import {initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnMM_P-hcWnDHk_xLOV-eIOY1twmMopeQ",
  authDomain: "games-library-3bb62.firebaseapp.com",
  projectId: "games-library-3bb62",
  storageBucket: "games-library-3bb62.appspot.com",
  messagingSenderId: "692444206400",
  appId: "1:692444206400:web:06a18957f544ca940e56a5",
  measurementId: "G-Z47HMLGBV6"
};

const app = initializeApp(firebaseConfig);

 const firestore = getFirestore(app);

 export default firestore;