// const image = document.querySelector('.HBlogo');
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

// image.addEventListener("mouseenter", crisLion);

const endDate = new Date("Sep 4, 2023 00:00:00").getTime();

// Mettre à jour le compte à rebours toutes les secondes
let timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000); // Ajoutez cette ligne

    document.getElementById(
      "countdown"
    ).innerHTML = ` <p><span>${days}</span> jours  
                    <span>${hours}</span> heures 
                    <span>${minutes}</span> minutes
                    <span>${seconds}</span> secondes</p>`; // Ajoutez les secondes ici
  }

  // Si le compte à rebours est terminé,écrire un texte d'achèvement
  else {
    document.getElementById("countdown").innerHTML = "C'est aujourd'hui !";
    clearInterval(timer);
  }
}, 1000);

addEventListener("scroll", () => {
  const menu = document.querySelector(".header");
  const scrollY = window.scrollY;
  console.log(scrollY);
  if (scrollY > 100) {
    menu.classList.add("menuSlide");
    console.log(menu);
  } 
});
addEventListener("scroll", () => {
  const menu = document.querySelector(".header");
  const scrollY = window.scrollY;
  console.log(scrollY);
  if (scrollY === 0) {
    menu.classList.remove("menuSlide");
    console.log(menu);
  } 
});
