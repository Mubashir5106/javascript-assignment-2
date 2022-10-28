const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});






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


let register_btn = document.getElementById("register_btn");

if (register_btn) {
  register_btn.addEventListener("click", () => {
    let name = document.getElementById("Name");
    let number = document.getElementById("number")
    let email = document.getElementById("email");
    let password = document.getElementById("password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        set(ref(db, `users/${user.uid}`), {
          name: name.value,
          number: number.value,
          email: email.value,
          password: password.value,
        })

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..


        console.log("error==>", errorMessage);
      });
  })
}
let login_btn = document.getElementById("login_btn");
if (loginBtn) {
  login_btn.addEventListener("click", function () {

    let name = document.getElementById("login_name");
    let email = document.getElementById("login_email");
    let password = document.getElementById("login_password");

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //   onValue(ref(db,`users/${user.uid}`),(data)=>{
        //   console.log("data==>",data.val())
        // })
        var profile = document.getElementById("profile")
        get(ref(db, `users/${user.uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val().name);
              console.log(snapshot.val().email);
              alert("login !")
              setTimeout(()=>{
                window.location = "userprofile.html"
                document.write("<h2> Current Profile :<h2/> <br>")
                document.write("User Name : " + snapshot.val().name + "<br>");
                document.write("Email Address : " + snapshot.val().email + "<br>");
                document.write("Phone Number : " + snapshot.val().number + "<br>");
                  
              },2000)
              profile.innerHTML = `<h2>${snapshot.val().name}${snapshot.val().email}/h2> `
            } else {
              console.log("No data available");
            }
          }).catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("error==>", error)
      });

  })
}




// const newName = document.getElementById("newName"),
// name = document.getElementById("Name");
// number = document.getElementById("number");
// email = document.getElementById("email");
// password = document.getElementById("password");
// file = document.getElementById("file");
// register_btn = document.getElementById("register_btn");
//   signout = document.getElementById("signout"),
// name = document.getElementById("login_name");
// email = document.getElementById("login_email");
// password = document.getElementById("login_password");
// let createAccount = () => {
//   createUserWithEmailAndPassword(auth, email.value, password.value)
//     .then(async (userCredential) => {
//       const user = userCredential.user;
//       console.log(userCredential);
//       console.log(user.uid);
//       await setDoc(doc(db, "users", user.uid), {
//         name: name.value,
//         // number: number.value,
//         email: email.value,
//         password: password.value,
//         // file: file,
//         uid: user.uid,
//       });
//       window.location = "userprofile.html";
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

// signup.addEventListener("click", createAccount);
// let loginAccount = () => {
//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then((userCredential) => {
//       const user = userCredential.user;
//       console.log(userCredential);
//       console.log(user.uid);
//       window.location = "userprofile.html";

//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//     });
// };

// login_btn.addEventListener("click", loginAccount);

