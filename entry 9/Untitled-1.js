// JavaScript Code 

// Detect scroll position
window.addEventListener("scroll", function() {

  // Add red glow to lightbulb
  let lightbulb = document.querySelector("#lightbulb img");
  lightbulb.style.filter = "drop-shadow(0 0 50px red)";

  // Fade in title text
  let text = document.querySelector("#text");
  text.style.opacity = 1;
  
});