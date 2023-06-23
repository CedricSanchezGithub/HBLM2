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

const header = document.querySelector(".header");
const logo = document.querySelector(".logo");

window.addEventListener("scroll", () => {
    console.log(scrollY);
  if (window.scrollY > 100) {
    header.style.height = "45px";
    logo.style.display = "none";
} else if (window.scrollY === 0) {
    header.style.height = "210px";
    logo.style.display = "block";
  }
});
