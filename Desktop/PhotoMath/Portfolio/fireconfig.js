console.log("helo")

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getDatabase } from "firebase/database";

const initializeApp = require("firebase/app");
const getAnalytics = require("firebase/analytics");
const getDatabase =  require("firebase/database");

// Import the functions you need from the SDKs you need

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCESQdudz9W80vcuLz_XrUdkdcTz6COnYY",
  authDomain: "math-experts.firebaseapp.com",
  projectId: "math-experts",
  databaseURL: "https://math-experts-default-rtdb.firebaseio.com/",
  storageBucket: "math-experts.appspot.com",
  messagingSenderId: "54170116866",
  appId: "1:54170116866:web:ae5f87eea24515fbca181b",
  measurementId: "G-ZVWYGX94W0"
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);



const saveMsgs = (name , email , subject , msg)=>{

  
}



// document.getElementById("contactForm").addEventListener('submit', submitForm)

console.log("somte thin happend");



const getElementVal= (id)=>{
    return document.getElementById(id).value; 
  }

function submitForm(e){
// e.preventDefault();

let name = document.getElementById("name").value;
let  email = document.getElementById("email").value;
let subject = document.getElementById('subject').value;
let msg = document.getElementById('msg').value;


console.log("values => ", name , email , subject , msg)

// saveMsgs(name , email , subject , msg);

const contactFormDB =  firebase.database().ref("contactForm");


let newContactForm  = contactFormDB.push();
  newContactForm.set({
    name , email , subject , msg
  })
}





