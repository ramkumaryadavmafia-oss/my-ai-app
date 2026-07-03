import { auth } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

window.signup = async function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
  } catch (err) {
    alert(err.message);
  }
};

window.login = async function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
    window.location.href = "index.html";
  } catch (err) {
    alert(err.message);
  }
};
