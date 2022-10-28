
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
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

// const starCountRef = ref(db, 'posts/' + postId + '/starCount');
// onValue(starCountRef, (snapshot) => {
//   const data = snapshot.val();
//   updateStarCount(postElement, data);
// });

  
// showData()


















// const curUser = document.getElementById("currentUser"),
//   friends = document.getElementById("friends"),
//   signout = document.getElementById("signout");
// let curUserDom = async (uid) => {
//   const docRef = doc(db, "users", uid);
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//     curUser.innerHTML = `
//   <h1>Name: ${docSnap.data().name}</h1>
//   <h3>Email: ${docSnap.data().email}</h3>
//   `;
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

// let friendsDom = async (email, uid) => {
//   const q = query(collection(db, "users"), where("email", "!=", email));

//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//     friends.innerHTML += `
//     <div>
//     <span>${doc.data().name}</span>
//     <button onclick="startChat('${doc.data().uid}','${uid}','${
//       doc.data().name
//     }')">Start Chat</button>
//     </div>
//     `;
//   });
// };

// window.onload = () => {
//   onAuthStateChanged(auth, (user) => {
//     if (user) {
//       const uid = user.uid;
//       console.log(user);
//       curUserDom(user.uid);
//       friendsDom(user.email, user.uid);

//       console.log(user.email, "==> this user logged in");
//       // ...
//     } else {
//       // window.location = "index.html"
//       // User is signed out
//       // ...
//     }
//   });
// };

// let signoutFunc = () => {
//   signOut(auth)
//     .then(() => {
//       console.log("sign out successfully");
//       window.location = "index.html";
//     })
//     .catch((error) => {
//       // An error happened.
//       console.log("error occured while signout");
//     });
// };
// console.log(signout);

// signout && signout.addEventListener("click", signoutFunc);
// if (signout) {
//   signout.addEventListener("click", signoutFunc);
// }

// let chatBox = document.getElementsByClassName("chatBox");
// let currentFriendChat;
// let uniqueUid;
// let messageList = document.getElementById("messageList");

// const startChat = (friendUid, currentUid, name) => {
//   currentFriendChat = friendUid;
//   messageList.innerHTML = "";
//   if (currentUid > friendUid) {
//     uniqueUid = currentUid + friendUid;
//   } else {
//     uniqueUid = currentFriendChat + auth.currentUser.uid;
//   }

//   const q = query(
//     collection(db, "messages"),
//     where("chatId", "==", uniqueUid),
//     orderBy("timestamp", "desc")
//   );
//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     messageList.innerHTML = "";

//     querySnapshot.forEach((doc) => {
//       messageList.innerHTML += `
//       <li>${doc.data().message}</li>
//       `;
//     });
//   });

//   chatBox[0].children[0].innerHTML = name;
// };

// window.startChat = startChat;
// let messageValue = document.getElementById("messageValue");
// const sendMessages = async () => {
//   messageList.innerHTML = "";
//   const docRef = await addDoc(collection(db, "messages"), {
//     message: messageValue.value,
//     sender: auth.currentUser.uid,
//     getter: currentFriendChat,
//     chatId: uniqueUid,
//     timestamp: new Date(),
//   });
//   messageValue.value = "";
// };

// window.sendMessages = sendMessages;