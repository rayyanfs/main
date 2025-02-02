document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});
let verificationBox = document.querySelector(".verification-box");
let please = document.querySelector(".please");
const no = document.getElementById("no");
const yes = document.getElementById("yes");
console.log(no);

const width = document.body.offsetWidth;
const height = document.body.offsetHeight;
let cryingCat = document.createElement("img");
function pressedNo() {
  const boxWidth = verificationBox.offsetWidth;
  const boxHeight = verificationBox.offsetHeight;
  let randomWidth = Math.floor(Math.random() * (width - boxWidth));
  let randomHeight = Math.floor(Math.random() * (height - boxHeight));
  verificationBox.style.top = `${randomHeight}px`;
  verificationBox.style.left = `${randomWidth}px`;
  please.classList.remove("hidden");

  cryingCat.src = "images/cryingcat.jpeg";
  cryingCat.classList.add("crying-cat");
  document.body.append(cryingCat);
}
no.addEventListener("click", pressedNo);

function triggerConfetti() {
  confetti({
    particleCount: 500, // Increase number of particles for more confetti
    spread: 180, // Spread the confetti all over the screen (180° angle)
    origin: { x: 0.5, y: 0.5 }, // Start from the top center of the screen
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"], // Confetti colors
    scalar: 1.5, // Larger confetti pieces
    gravity: 0.5, // Slight gravity to control the falling speed
    drift: 0.1, // Slight horizontal drift to add variation
  });

  confetti({
    particleCount: 500, // Increase number of particles for more confetti
    spread: 150, // Spread the confetti all over the screen (180° angle)
    origin: { x: Math.random(), y: Math.random() }, // Random origin for more spread
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"], // Confetti colors
    scalar: 1.5, // Larger confetti pieces
    gravity: 0.5, // Slight gravity to control the falling speed
    drift: 0.1, // Slight horizontal drift to add variation
  });
  confetti({
    particleCount: 200, // Increase number of particles for more confetti
    spread: 150, // Spread the confetti all over the screen (180° angle)
    origin: { x: Math.random(), y: Math.random() }, // Random origin for more spread
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"], // Confetti colors
    scalar: 1.5, // Larger confetti pieces
    gravity: 0.5, // Slight gravity to control the falling speed
    drift: 0.1, // Slight horizontal drift to add variation
  });
  confetti({
    particleCount: 200, // Increase number of particles for more confetti
    spread: 150, // Spread the confetti all over the screen (180° angle)
    origin: { x: Math.random(), y: Math.random() }, // Random origin for more spread
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"], // Confetti colors
    scalar: 1.5, // Larger confetti pieces
    gravity: 0.5, // Slight gravity to control the falling speed
    drift: 0.1, // Slight horizontal drift to add variation
  });
  confetti({
    particleCount: 200, // Increase number of particles for more confetti
    spread: 150, // Spread the confetti all over the screen (180° angle)
    origin: { x: Math.random(), y: Math.random() }, // Random origin for more spread
    colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00"], // Confetti colors
    scalar: 1.5, // Larger confetti pieces
    gravity: 0.5, // Slight gravity to control the falling speed
    drift: 0.1, // Slight horizontal drift to add variation
  });
}

let congrats = document.querySelector(".last");

yes.addEventListener("click", () => {
  triggerConfetti();
  let rikshaw = document.createElement("img");
  rikshaw.src = "images/rikshaw.webp";
  document.body.append(rikshaw);
  rikshaw.classList.add("rikshaw");
  congrats.classList.remove("hidden");
  verificationBox.classList.add("hidden");
  cryingCat.classList.add("hidden");
  please.classList.add("hidden");
});
