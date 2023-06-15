const image = document.querySelector('.logo');

image.addEventListener('click', () => {
    const audio = new Audio('layouts/lion.mp3');
    audio.play();
});