// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyD1wazbyiyFNgkuRVjeYEIC1tkZQdVgXNA",
    authDomain: "road-to-knowledge.firebaseapp.com",
    projectId: "road-to-knowledge",
    storageBucket: "road-to-knowledge.appspot.com",
    messagingSenderId: "229555724267",
    appId: "1:229555724267:web:559929d2ee5a7c2205c3ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;