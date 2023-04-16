import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyCDqpSA_-xEwVkbj-EBwPHNYiSvJO6ULOY",
	authDomain: "wedding-photos-challenge.firebaseapp.com",
	projectId: "wedding-photos-challenge",
	storageBucket: "wedding-photos-challenge.appspot.com",
	messagingSenderId: "1095306889273",
	appId: "1:1095306889273:web:2f1ac74abc6fb029f1a5e8",
	measurementId: "G-3V15Z3EV3R"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);