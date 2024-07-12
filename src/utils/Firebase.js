// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASWVniWpMR_wKYxWj13dmYDlj230A1irU",
  authDomain: "react-website-8d48b.firebaseapp.com",
  projectId: "react-website-8d48b",
  storageBucket: "react-website-8d48b.appspot.com",
  messagingSenderId: "687078963364",
  appId: "1:687078963364:web:94ff32ac4ac7f00c688e31",
  measurementId: "G-0YCVCFFH36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);