
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  get
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyA5uFw26dtFzGRv0_RJR1POjCv3ngWzw8E",
  authDomain: "user-authantication-profile.firebaseapp.com",
  projectId: "user-authantication-profile",
  storageBucket: "user-authantication-profile.appspot.com",
  messagingSenderId: "599583378222",
  appId: "1:599583378222:web:8f530009b2eb79887a48bf",
  measurementId: "G-C544PNR6BY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();

let profile = document.getElementById('profile')

const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});

  


  
}
showData()