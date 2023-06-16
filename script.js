const image = document.querySelector('.logo');
let isListening = true;

function crisLion() {
  if (isListening) {
    const audio = new Audio('layouts/lion.mp3');
    audio.play();
    console.log("rawr");
    isListening = false;

    setTimeout(() => {
      isListening = true;
    }, 6000);
  }
}

image.addEventListener('mouseenter', crisLion);
