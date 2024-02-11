import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDEF-zMJg-m1-r_WzdG3NMicEckffWImTs",
    authDomain: "beka-d9159.firebaseapp.com",
    projectId: "beka-d9159",
    storageBucket: "beka-d9159.appspot.com",
    messagingSenderId: "252017361312",
    appId: "1:252017361312:web:081742c73bb5dcbd6424c5",
    measurementId: "G-WD76N2TG4Z"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
