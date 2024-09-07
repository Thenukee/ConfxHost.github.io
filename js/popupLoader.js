// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKZ8XGHibtI2uYI1RmHUhNFz7Fc4Bn84U",
  authDomain: "sjbyouthforum2024.firebaseapp.com",
  databaseURL: "https://sjbyouthforum2024-default-rtdb.firebaseio.com",
  projectId: "sjbyouthforum2024",
  storageBucket: "sjbyouthforum2024.appspot.com",
  messagingSenderId: "4854780384",
  appId: "1:4854780384:web:de6ee370d66eb47bb85b85",
  measurementId: "G-K5MRZ7Z571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Show modal on page load
window.onload = function() {
  const modal = document.getElementById("myModal");
  const closeModal = document.getElementsByClassName("close")[0];

  // Disable scrolling when modal is open
  document.body.style.overflow = "hidden";
  
  modal.style.display = "block";

  // When the user clicks the Yes/No buttons
  document.getElementById("yesButton").onclick = function() {
    saveResponse('yes');
    closeModalFunc();
  };
  document.getElementById("noButton").onclick = function() {
    saveResponse('no');
    closeModalFunc();
  };

  // Close modal on "x" click
  closeModal.onclick = function() {
    closeModalFunc();
  };
};

// Close modal and enable scrolling again
function closeModalFunc() {
  document.getElementById("myModal").style.display = "none";
  document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Function to save the response (Yes/No) to Firebase
function saveResponse(response) {
  const responseRef = ref(db, 'responses'); // Reference to 'responses' collection in Firebase
  push(responseRef, {
    response: response,
    timestamp: Date.now()
  }).then(() => {
    alert("Thank you for your response!");
  }).catch((error) => {
    console.error("Error saving response: ", error);
  });
}
