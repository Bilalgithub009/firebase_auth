{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  import {getAuth ,onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyCr07ziNDOEAmzmZ7YaUYNlkJfpnlzkoYg",
    authDomain: "my-first-project-12034.firebaseapp.com",
    projectId: "my-first-project-12034",
    storageBucket: "my-first-project-12034.appspot.com",
    messagingSenderId: "491360998619",
    appId: "1:491360998619:web:ea9ffd60daa3925eefa8fe",
    measurementId: "G-NTLRL6VH6R"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const Analytics = getAnalytics(app);
  const auth = getAuth(app);

  const signup_email = document.getElementById("signup_email");
  const  password = document.getElementById("password");
  const signup_btn = document.getElementById("signup_btn");


  
  const signin_email = document.getElementById("signin_email");
  const  passwordsignin = document.getElementById("passwordsignin");
  const signin_btn = document.getElementById("signin_btn");

  const auth_container = document.getElementById("auth_container");
  const user_container = document.getElementById("user_container");
  const user_email = document.getElementById("user_email");
  const logout_btn = document.getElementById("logout_btn");


  signup_btn.addEventListener("click" , createUser);
  signin_btn.addEventListener("click" , signin);
  logout_btn.addEventListener("click" , logout);




onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("user is login")
        auth_container.style.display = "none";
        user_container.style.display = "block";
        user_email.innerText = user.email;
      const uid = user.uid;

    } else {
        console.log("user is not login")
        auth_container.style.display = "block";
        user_container.style.display = "none";
      
    }
  });

function createUser (){
// console.log("email" , signup_email.value);
// console.log( "password", password.value);


createUserWithEmailAndPassword(auth,  signup_email.value,  password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log("user" , userlogin);
    //...
  })
  .catch((error) => {
    const errorCode = error.code;
    // const errorMessage = error.message;
    alert('errormessage')
    // ..
  });

}


function signin(){

    
// console.log("email" , signin_email.value);
// console.log( "password ha", signinpassword.value);

signInWithEmailAndPassword(auth, signin_email.value, signinpassword.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log("user" , user); 
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("error message");
  });



}

function logout(){
    signOut(auth)
    .then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}