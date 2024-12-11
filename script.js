document.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const aboutMe = document.getElementById("about-me");
  
    // Set a timer for the intro to fade out
    setTimeout(() => {
      intro.style.transition = "opacity 1s ease";
      intro.style.opacity = 0;
  
      // Wait for the fade-out to complete, then hide intro and show about me
      setTimeout(() => {
        intro.classList.add("hidden");
        aboutMe.classList.remove("hidden");
      }, 1000); // Match the transition duration (1 second)
    }, 3000); // Delay before fade out starts (e.g., 3 seconds)
  });
  