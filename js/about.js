document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");
});

let Heart = document.querySelector(".heart-cont");
let giveHeartPara = document.querySelector(".para");
const width = document.body.offsetWidth;

moreHearts();
function moreHearts() {
  for (let i = 0; i < 60; i++) {
    randomNum = Math.floor(Math.random() * width);
    let clonedElement = Heart.cloneNode(true);
    //   clonedElement.style.position = "absolute";
    clonedElement.style.left = `${randomNum}px`;

    clonedElement.style.transform = `scale(${Math.random() * 2 + 0.5})`;

    clonedElement.style.animation = `moveHeart ${
      Math.random() * 2 + 2
    }s ease-out forwards`;
    document.body.appendChild(clonedElement);
  }
}

let dragHeart = document.querySelector(".heart-drag");
let dropHeart = document.querySelector(".drop-container");

dragHeart.addEventListener("dragstart", (e) => {
  e.dataTransfer.effectAllowed = "move"; // Allows movement
  e.dataTransfer.setData("text", "heart");
});

dropHeart.addEventListener("dragover", (e) => {
  e.preventDefault(); // Necessary to allow dropping
  e.dataTransfer.dropEffect = "move"; // Prevents red cross
});

dropHeart.addEventListener("drop", (e) => {
  e.preventDefault();
  const x = e.clientX;
  const y = e.clientY;

  dragHeart.style.position = "absolute";
  dragHeart.style.left = `${x - 25}px`; // Adjust to center heart
  dragHeart.style.top = `${y - 25}px`;
  moreHearts();
  giveHeartPara.textContent = "Transaction Successful!!";
  transactionSuccessful();
});

function transactionSuccessful() {
  let transaction = document.createElement("button");
  transaction.textContent = "Move on to verification";
  transaction.classList.add("verification");
  document.body.appendChild(transaction);
  transaction.addEventListener("click", () => {
    window.location.href = "third.html";
  });
}
