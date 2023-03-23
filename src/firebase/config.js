import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBjHUrsn2m1qNg2R6ZDlJQSYPa7K7KZKM4",
  authDomain: "blogzinho-84061.firebaseapp.com",
  projectId: "blogzinho-84061",
  storageBucket: "blogzinho-84061.appspot.com",
  messagingSenderId: "157858839417",
  appId: "1:157858839417:web:36215151a5d82bb6a90da8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };