const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startButton = document.querySelector('.btn__reset');

startButton.addEventListener('click', (e) => {
    const startOverlay = document.getElementById('overlay');
    startOverlay.style.display = 'none';
})

// source: https://boards.straightdope.com/sdmb/archive/index.php/t-334013.html
const phrases = [
    "our princess is in another castle",  //super mario bros
    "finish him",  //mortal kombat
    "buy somethin will ya",  //zelda
    "prepare to qualify",  //pole position
    "may the way of the hero lead to the triforce" //zelda III
]