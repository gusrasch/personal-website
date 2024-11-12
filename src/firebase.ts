// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyB_VrRahrAv2X9pxk5iXD3jVJIILidbIs8",
  authDomain: "gusras-ch-site.firebaseapp.com",
  projectId: "gusras-ch-site",
  storageBucket: "gusras-ch-site.firebasestorage.app",
  messagingSenderId: "722422954481",
  appId: "1:722422954481:web:311f75e623c42d1ee96c50",
  measurementId: "G-T2TTLKF85Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };
export default app;
