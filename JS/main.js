import { radioPlayerInit } from './radioPlayer.js';
import { videoPlayerInit } from './videoPlayer.js';
import { musicPlayerInit } from './musicPlayer.js';


const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');

//Функции

const deactivationPlayer = () => {
    temp.style.display = 'none';
    playerBtn.forEach((item) => { item.classList.remove('active') });
    playerBlock.forEach((item) => { item.classList.remove('active') })

    musicPlayerInit.stop();
    radioPlayerInit.stop();
    videoPlayerInit.stop();
};

//Конец функций
playerBtn.forEach((btn, i) => { // перебор элементов
    btn.addEventListener('click', () => { // навешиваем событие на все кнопки
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active');
    })
});

document.addEventListener('keydown', () => {
    if (event.code === 'Escape'){
        musicPlayerInit.stop();
        radioPlayerInit.stop();
        videoPlayerInit.stop();
    }
})


radioPlayerInit();
videoPlayerInit();
musicPlayerInit();