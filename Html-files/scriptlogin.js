import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDx_FcoL3XJryt6BInhOaDsMKiSmxzrYBI",
  authDomain: "fir-7f3dd.firebaseapp.com",
  projectId: "fir-7f3dd",
  storageBucket: "fir-7f3dd.appspot.com",
  messagingSenderId: "467011865433",
  appId: "1:467011865433:web:e23be9d0cc3496bb961a48"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login");
googleLogin.addEventListener("click", function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "../logged.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
});