import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAHlv466bMEtiCf_Z0fHA9wgFfcQgqEsg",
  authDomain: "my-ai-app-cdfce.firebaseapp.com",
  projectId: "my-ai-app-cdfce",
  storageBucket: "my-ai-app-cdfce.firebasestorage.app",
  messagingSenderId: "306306694555",
  appId: "1:306306694555:web:90372c9f6d970544acf53e",
  measurementId: "G-SQHZNR1QK0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.signup = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Account ban gaya!");
  } catch (error) {
    alert(error.message);
  }
};

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Login Successful!");
    window.location.href = "index.html";
  } catch (error) {
    alert(error.message);
  }
};
