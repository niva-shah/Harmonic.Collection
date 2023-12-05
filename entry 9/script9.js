document.addEventListener("mousemove", function(e) {
  const xPos = e.clientX / window.innerWidth * 360;
  const gradientColors = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, 
    hsl(${xPos}, 100%, 50%), 
    transparent
  )`;

  document.querySelector(".gradient").style.background = gradientColors;
});
