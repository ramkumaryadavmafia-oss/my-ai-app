import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAAHlv466bMEtiCf_Z0fHA9wgFfcQgqEsg",
  authDomain: "my-ai-app-cdfce.firebaseapp.com",
  projectId: "my-ai-app-cdfce",
  storageBucket: "my-ai-app-cdfce.firebasestorage.app",
  messagingSenderId: "306306694555",
  appId: "1:306306694555:web:90372c9f6d970544acf53e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);