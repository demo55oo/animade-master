// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2Sg6ITii7Oku8LKSOfLV4O1D7vVBm6aQ",
  authDomain: "animade-a7239.firebaseapp.com",
  projectId: "animade-a7239",
  storageBucket: "animade-a7239.appspot.com",
  messagingSenderId: "351265316890",
  appId: "1:351265316890:web:359fc489cf8b1b70df71a3",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
