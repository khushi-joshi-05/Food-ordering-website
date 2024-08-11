import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZQ_XMe7e7AHPMsQfL-vEQGDHcPL7COyY",
  authDomain: "foodweb-11e21.firebaseapp.com",
  projectId: "foodweb-11e21",
  storageBucket: "foodweb-11e21.appspot.com",
  messagingSenderId: "172576488418",
  appId: "1:172576488418:web:5d5d9ce22870c866a617bb"
};

// Initialize Firebase
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
      window.location.href = "../index.html";
  }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
  });
});

onAuthStateChanged(auth, (user) => {
const loginLink = document.querySelector('.nav-link[href="Html-files/login.html"]');
const signUpLink = document.querySelector('.nav-link[href="Html-files/signup.html"]');

if (user) {
  // User is logged in
  if (loginLink) loginLink.style.display = 'none'; // Hiding the Login link
  if (signUpLink) signUpLink.style.display = 'none'; // Hiding the Sign-Up link
  
  // Create and insert logout link
  const logoutLink = document.createElement('a');
  logoutLink.textContent = 'Logout';
  logoutLink.href = '#';
  logoutLink.className = 'nav-link';
  logoutLink.addEventListener('click', (e) => {
    e.preventDefault();
    signOut(auth).then(() => {
      window.location.href = "../index.html"; 
    });
  });
  
  const navList = document.querySelector('.navbar-nav');
  if (navList && loginLink) {
    navList.insertBefore(logoutLink, loginLink); 
  }
  
} else {
  // User is not logged in
  if (loginLink) loginLink.style.display = './login.html'; // Show Login link
  if (signUpLink) signUpLink.style.display = './sign-up.html'; // Show Sign-Up link
}
});
