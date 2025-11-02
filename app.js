
   import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import {getDatabase , ref , push} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-database.js";
   import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

  const firebaseConfig = {
    apiKey: "AIzaSyB4lMuCb_RXZX3-FGAf3CMNQAskbjojGIM",
    authDomain: "authentication-app-21871.firebaseapp.com",
    projectId: "authentication-app-21871",
    storageBucket: "authentication-app-21871.firebasestorage.app",
    messagingSenderId: "488390433019",
    appId: "1:488390433019:web:4a9962cf73a5bd06c5385e",
    measurementId: "G-3PGG6YTN1T"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  const feedbackForm = document.getElementById("feedbackForm");

  feedbackForm.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const fName = document.getElementById('fname').value;
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const message = document.getElementById('message').value;

   push(ref(db , "Feedback"), {name , fName ,gender , date,email,rating,message})
   .then(()=>{
    alert('Thanks for your feedback ❤');
    feedbackForm.reset();
   })
   .catch((error)=>{
      alert("Error submitting feedback: " + error.message);
   })
  })
