// Wait for the DOM to load before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the "Sign Up Now" button
    const signUpButton = document.querySelector(".button");
  
    // Add a click event listener to the button
    signUpButton.addEventListener("click", function () {
      // Replace this alert with your desired action
      alert("Thank you for signing up!");
    });
  });
  // Slideshow for the Features section
document.addEventListener("DOMContentLoaded", function () {
    const featureImages = document.querySelectorAll(".features img");
    let currentSlide = 0;
  
    function showSlide(slideIndex) {
      featureImages.forEach((img, index) => {
        img.style.display = index === slideIndex ? "block" : "none";
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % featureImages.length;
      showSlide(currentSlide);
    }
  
    // Display the first slide
    showSlide(currentSlide);
  
    // Switch slides every 5 seconds (adjust as needed)
    setInterval(nextSlide, 5000);
  });
  // Form Validation for the Contact section
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const nameInput = contactForm.querySelector('input[name="name"]');
      const emailInput = contactForm.querySelector('input[name="email"]');
      const messageInput = contactForm.querySelector('textarea[name="message"]');
  
      // Simple email validation (you can use more complex validation if needed)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Replace this alert with your desired form submission action
      alert("Thank you for your message!");
      // Reset the form after successful submission
      contactForm.reset();
    });
  });
  

  // Smooth Scroll to Sections
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSectionId = this.getAttribute("href");
        const targetSection = document.querySelector(targetSectionId);
  
        if (targetSection) {
          const headerOffset = 60; // Adjust the offset based on your header's height
          const targetOffset = targetSection.getBoundingClientRect().top;
          const scrollTarget = targetOffset + window.scrollY - headerOffset;
  
          window.scrollTo({
            top: scrollTarget,
            behavior: "smooth",
          });
        }
      });
    });
  });

  // Scroll Reveal Animation
document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealElements = document.querySelectorAll(".scroll-reveal");
  
    function revealElements() {
      scrollRevealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealAt = window.innerHeight * 0.9; // Adjust the reveal point as needed
  
        if (elementTop < revealAt) {
          element.classList.add("revealed");
        }
      });
    }
  
    // Initially reveal the elements on page load
    revealElements();
  
    // Reveal the elements when scrolling
    window.addEventListener("scroll", revealElements);
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get all product category elements
    const productCategories = document.querySelectorAll(".product-category");
  
    // Get all show/hide buttons
    const categoryToggleButtons = document.querySelectorAll(".category-toggle");
  
    // Add click event listeners to buttons
    categoryToggleButtons.forEach(button => {
      button.addEventListener("click", function () {
        const categoryToShow = this.dataset.category;
        toggleProductCategory(categoryToShow);
      });
    });
  
    // Function to toggle product category visibility
    function toggleProductCategory(category) {
      productCategories.forEach(categoryElement => {
        if (categoryElement.dataset.category === category) {
          categoryElement.classList.toggle("show");
        }
      });
    }
  });
  