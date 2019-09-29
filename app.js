const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const startButton = document.querySelector('.btn__reset');

// source: https://boards.straightdope.com/sdmb/archive/index.php/t-334013.html
const phrases = [
    "but our princess is in another castle",  //super mario bros
    "finish him",  //mortal kombat
    "buy somethin will ya",  //zelda
    "prepare to qualify",  //pole position
    "may the way of the hero lead to the triforce" //zelda III
];

// https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array#5915122
// gets random phrase specifically in phrases array
// let randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
// console.log(randomPhrase);

//function to get randomItem from any array
function getRandomPhraseAsArray(arr) {
    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    // console.log(randomItem);
    let characters = Array.from(randomItem);
    console.log(characters);
//     for (i=0; i<randomItem.length; i++) {
//         let charactersArray = [];
// // https://stackoverflow.com/questions/3427132/how-to-get-first-character-of-string
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
//         // console.log(randomItem.charAt(i));
//         let characters = randomItem.charAt(i);
//         // charactersArray = Array.from(characters);
//         // charactersArray = characters.split(",");
//         console.log(charactersArray);
//     }
//     return(randomItem);
}

getRandomPhraseAsArray(phrases);





startButton.addEventListener('click', (e) => {
    const startOverlay = document.getElementById('overlay');
    startOverlay.style.display = 'none';
})