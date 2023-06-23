// const image = document.querySelector('.logo');
// let isListening = true;

// function crisLion() {
//   if (isListening) {
//     const audio = new Audio('layouts/lion.mp3');
//     audio.play();
//     console.log("rawr");
//     isListening = false;

//     setTimeout(() => {
//       isListening = true;
//     }, 6000);
//   }
// }

// image.addEventListener('mouseenter', crisLion);

const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (window.scrollY > 200) {
    header.style.transform = "translateY(-200px)";
    header.style.paddingBot = "10px";
  } else if (window.scrollY === 0) {
    header.style.transform = "translateY(0)";
  }
});
