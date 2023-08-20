import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl0rswT_OmLoR3G1SFDU7Aevu8U6tpuZU",
  authDomain: "hype-ds.firebaseapp.com",
  projectId: "hype-ds",
  storageBucket: "hype-ds.appspot.com",
  messagingSenderId: "125564349958",
  appId: "1:125564349958:web:27f48b2825868b1ff75d87",
  measurementId: "G-YHVDCLFDPT"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
