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

const endDate = new Date("Sep 4, 2023 00:00:00").getTime();
const burger = document.querySelector(".burgerCountainer");
const

// Mettre à jour le compte à rebours toutes les secondes
let timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById(
      "countdown"
    ).innerHTML = ` <p><span>${days}</span> jours  
                    <span>${hours}</span> heures et 
                    <span>${minutes}</span> minutes</p>`;
  }

  // Si le compte à rebours est terminé, écrire un texte d'achèvement
  else {
    document.getElementById("countdown").innerHTML = "C'est aujourd'hui !";
    clearInterval(timer);
  }
}, 1000);


function burgerMenu () {
  burger.addEventListener('click', () => {
    
  })
}