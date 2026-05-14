// PARTICLES

const particlesContainer = document.getElementById("particles");

for(let i = 0; i < 80; i++){

  const particle = document.createElement("div");

  particle.classList.add("particle");

  particle.style.left = Math.random() * 100 + "vw";

  particle.style.width =
  particle.style.height =
  Math.random() * 4 + 2 + "px";

  particle.style.opacity = Math.random();

  particle.style.animationDuration =
  Math.random() * 10 + 5 + "s";

  particlesContainer.appendChild(particle);
}

// TITLE PULSE EFFECT

const title = document.querySelector("h1");

setInterval(() => {

  title.style.transform = "scale(1.03)";

  setTimeout(() => {
    title.style.transform = "scale(1)";
  }, 500);

}, 3000);