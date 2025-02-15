import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDf3-HUnPA4ctjD5Zj88TWXgoSz0bcUGCo",
  authDomain: "resh-form.firebaseapp.com",
  projectId: "resh-form",
  storageBucket: "resh-form.firebasestorage.app",
  messagingSenderId: "769002407702",
  appId: "1:769002407702:web:e6988905cc1e4733c7f237",
  measurementId: "G-T117WCB8KP",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const handleSignup = () => {
  const email = document.getElementById("email-signup").value;
  const password = document.getElementById("password-signup").value;

  if (email && password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        window.location.href = "./login.html"
    })
    .catch((error) => {
        alert(error.message)
    });
  }
};



const handleLogin = () => {
    const email = document.getElementById("email-login").value;
    const password = document.getElementById("password-login").value;
  
    if (email && password) {
        signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          console.log(userCredential.user);
      })
      .catch((error) => {
          alert(error.message)
      });
    }
  };


  onAuthStateChanged(auth,(user)=>{
    const logoutBtn = document.getElementById("logout");
    if(user){
        logoutBtn.style.display="flex";

        logoutBtn.addEventListener("click", (e)=>{
            e.preventDefault()
            signOut(auth);
            window.location.href = "./Index.html"
        });
    }else{
        logoutBtn.style.display="none";
        console.log("User not logged in");
    };
  });

  const button = document.getElementById("signup-btn");
  if(button){
    button.addEventListener("click", (e)=>{
        e.preventDefault();
        handleSignup();
    });
  }

  const loginButton = document.getElementById("login-btn");
  if(loginButton){
    loginButton.addEventListener("click", (e)=>{
        e.preventDefault();
        handleLogin();
    });
  }
