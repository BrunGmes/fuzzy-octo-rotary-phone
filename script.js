// script.js

// Airbnb link
const airbnbLink = "https://www.airbnb.com/rooms/your-listing-id";

// Function to redirect to Airbnb
function redirectToAirbnb() {
  window.open(airbnbLink, "_blank");
}

// Simulated reviews data
const reviews = [
  { name: "Alice", text: "Amazing stay! Beautiful place and great host." },
  { name: "Bob", text: "Loved the view and the cozy atmosphere." },
  { name: "Charlie", text: "Perfect location, close to everything!" },
];

// Load reviews dynamically
function loadReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  reviews.forEach(review => {
    const reviewElement = document.createElement("div");
    reviewElement.className = "review";
    reviewElement.innerHTML = `
      <strong>${review.name}</strong>
      <p>${review.text}</p>
    `;
    reviewsContainer.appendChild(reviewElement);
  });
}

// Initialize reviews on page load
document.addEventListener("DOMContentLoaded", loadReviews);
