// Import the functions you need from the SDKs you need


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADXImUolL6U91xQMfXV3_i_RLWP5c3PS8",
    authDomain: "mine-wine.firebaseapp.com",
    projectId: "mine-wine",
    storageBucket: "mine-wine.appspot.com",
    messagingSenderId: "687906083079",
    appId: "1:687906083079:web:3fdf20a4dd9bd31c3ff5a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = getAuth();


document.getElementById("register-btn").addEventListener("click", function() {

    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;
    let name = document.getElementById("name-input").value;


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
})