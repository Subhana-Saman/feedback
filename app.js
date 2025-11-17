    import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
    import {getDatabase , ref , push} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

 const firebaseConfig = {
    apiKey: "AIzaSyAJsifHJ8ZxrNhc0o1DTIVI5GiCTwhK9M4",
    authDomain: "form-85710.firebaseapp.com",
    projectId: "form-85710",
    storageBucket: "form-85710.firebasestorage.app",
    messagingSenderId: "508713766944",
    appId: "1:508713766944:web:bcc861b5eb9a114625ec45",
    measurementId: "G-XPGLSRY5XQ"
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








