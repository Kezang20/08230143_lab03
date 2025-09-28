document.addEventListener("DOMContentLoaded", () => {

  // --- Welcome Alert ---
  // Show a greeting alert when the page loads
  alert("Welcome to Kezang Dema's Portfolio ✨");

  // --- Dynamic Greeting in Hero Section ---
  // Display a time-based greeting below the hero heading
  const hero = document.querySelector(".hero");
  const greeting = document.createElement("p");
  greeting.classList.add("greeting");
  const hour = new Date().getHours();
  greeting.textContent = hour < 12 ? "Good Morning 🌸" :
                           hour < 18 ? "Good Afternoon ☀️" :
                                       "Good Evening 🌙";
  hero.appendChild(greeting);

  // --- Hamburger Menu Toggle ---
  // Open/close navigation menu on mobile when hamburger is clicked
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // --- Dark/Light Mode Toggle ---
  // Switch between dark and light themes
  const themeToggle = document.getElementById("toggle-theme");
  themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

  // Update project cards color on mode change
  projects.forEach(card => {
    card.style.background = document.body.classList.contains("dark-mode") ? "#5a4a87" : "#c1e1ec";
  });
});

// --- Project Cards Hover Effect ---
const projects = document.querySelectorAll(".project-card");
projects.forEach((card) => {
  // Set initial background based on mode
  card.style.background = document.body.classList.contains("dark-mode") ? "#5a4a87" : "#c1e1ec";

  // Hover effects
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.05)";
    card.style.background = document.body.classList.contains("dark-mode") ? "#8068c0ff" : "#f7c4ea";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
    card.style.background = document.body.classList.contains("dark-mode") ? "#5a4a87" : "#c1e1ec";
  });
});


  // --- Contact Form Validation ---
  // Validate form input before submission
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const message = form.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      alert("Please fill out all fields!");// Alert if any field is empty
    } else {
      alert(`Thanks ${name}, your message has been received! 🌸`); // Thank the user
      form.reset(); // Clear the form
    }
  });

});
