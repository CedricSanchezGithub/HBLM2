// ** LE RAWR DU LION **
const image = document.querySelector(".HBlogo");
function crisLion() {
  let isListening = true;
  if (isListening) {
    const audio = new Audio("layouts/lion.mp3");
    audio.play();
    console.log("rawr");
    isListening = false;

    setTimeout(() => {
      isListening = true;
    }, 6000);
  }
}

image.addEventListener("click", crisLion);

// ** LE TIMER 
const endDate = new Date("Sep 4, 2023 00:00:00").getTime();

let timer = setInterval(function () {
  let now = new Date().getTime();
  let t = endDate - now;

  if (t >= 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = ` <p><span>${days}</span> jours  
                    <span>${hours}</span> heures 
                    <span>${minutes}</span> minutes
                    <span>${seconds}</span> secondes</p>`;
  } else {
    document.getElementById("countdown").innerHTML = "C'est aujourd'hui !";
    clearInterval(timer);
  }
}, 1000);


// ** LE HEADER MOCHE
addEventListener("scroll", () => {
  const menu = document.querySelector(".header");
  const scrollY = window.scrollY;
  if (scrollY > 100) {
    menu.style.height = "20px";
  }
});
addEventListener("scroll", () => {
  const menu = document.querySelector(".header");
  const scrollY = window.scrollY;
  if (scrollY === 0) {
    menu.style.height = "";
  }
});


// ** LA FLECHE SCROLL UP
let mybutton = document.getElementById("scrollUp");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function goUp() {
  if (isListening) {
    console.log("click");
  }
}


image.addEventListener("click", goUp);
