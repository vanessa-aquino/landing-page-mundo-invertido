// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDp6o1V2P5pBaRGYEHTMLR9xPf6u9BL_5I",
    authDomain: "landing-page---mundo-invertido.firebaseapp.com",
    projectId: "landing-page---mundo-invertido",
    storageBucket: "landing-page---mundo-invertido.firebasestorage.app",
    messagingSenderId: "253561652674",
    appId: "1:253561652674:web:be42c88dbbe213b392c25b",
    measurementId: "G-Z1J0KY7V1R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;