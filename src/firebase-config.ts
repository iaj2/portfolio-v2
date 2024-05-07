// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDMgFxR6i3paJQOgzlza9GduF2o9tvD_I",
  authDomain: "portfolio-v2-a00fd.firebaseapp.com",
  projectId: "portfolio-v2-a00fd",
  storageBucket: "portfolio-v2-a00fd.appspot.com",
  messagingSenderId: "973533761083",
  appId: "1:973533761083:web:bea8801b812362b47e161e",
  measurementId: "G-SVWJ57EL7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// FIRESTORE DATABASE
const db = getFirestore(app);

interface ProjectData {
  id: string,
  name: string,
  description: string,
  githubLink: string,
  tech: string[],
}

export { db };
export type { ProjectData };