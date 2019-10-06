document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('overlay');
    const qwerty = document.getElementById('qwerty');
    const phrase = document.getElementById('phrase');
    let missed = 0;
    const startButton = document.querySelector('.btn__reset');
    const keyrow = document.getElementsByClassName('keyrow');
    const button = keyrow.children;
    const mainContainer = document.querySelector('.main-container');
    const ol = document.querySelector('ol');

    // source: https://boards.straightdope.com/sdmb/archive/index.php/t-334013.html
    const phrases = [
        "but our princess is in another castle",  //super mario bros
        "finish him",  //mortal kombat
        "buy somethin will ya",  //zelda
        "prepare to qualify",  //pole position
        "may the way of the hero lead to the triforce" //zelda III
    ];

    // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array#5915122
    //Get randomItem from any array
    function getRandomPhraseAsArray(arr) {
        const randomItem = arr[Math.floor(Math.random() * arr.length)];
        // let characters = new Object();
        characters = Array.from(randomItem);
        console.log(characters);
        return characters;
    }

    //Display Random Phrase
    function addPhraseToDisplay(arr) {
        const ul = document.querySelector('ul');
        for (i=0; i<arr.length; i++) {  //loop through array of characters
            const character = characters[i];         
            const li = document.createElement('li');   //create li
            li.textContent = arr[i];  //put character in li
            ul.appendChild(li);  //append list item to ul
            if (character !== ' ') {  //add .letter class if character is not space
                li.className += 'letter'; 
            } else {
                li.className += 'space';
            }
        }
    }

// check chosen letter against phrase
        function checkLetter(button) {
            const letter = document.getElementsByClassName('letter');
            let match;
            for (i=0; i<letter.length; i+=1) {
                if (letter[i].innerHTML === button.innerHTML) {
                    letter[i].classList.add("show");            
                    const match = letter[i].innerHTML;
                }
            } 
            if (match) {
                console.log('true');
                return match;
            } 
            else {
                console.log('false');
                return null;
            }
        };

    function checkWin() {
        const show = document.getElementsByClassName('show');
        // const letter = document.getElementsByClassName('letter');
        if (show.length === letter.length) {
            overlay.className += "win";
        }    
        overlay.style.display = "block";
    };



    const phraseArray = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(phraseArray);


    //remove start-game overlay
    startButton.addEventListener('click', (e) => {
        overlay.style.display = 'none';
    })

    // Add an event listener to the keyboard
    for (i = 0; i < keyrow.length; i+=1) {
        keyrow[i].addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
            
                e.target.classList.add('chosen');
                const chosen = document.getElementsByClassName('chosen');
                console.log(e.target.textContent);   
                const checkLetterResult = checkLetter(e.target);
                if (checkLetterResult === null) {
                    const li = document.querySelectorAll('.tries');
                    const heart = li.firstChild;
                    const image = document.getElementsByTagName('img');
                    for (i=0; i<image.length; i+=1) {
                        // li.removeElement(image);
                        // li.createElement
                        // https://stackoverflow.com/questions/19936590/replace-an-image-with-another-when-a-different-image-is-hovered-on
                        // image[i].innerHTML='<img src ="lostHeart.png" />';
                        missed += 1;
                    }
                }
                if (missed === 5) {
                    overlay.className += "lose";
                } else {
                    checkWin();
                }               
            }  
        })
    };

    // Add an event listener to the keyboard. WHY DOESN'T BUTTON WORK? IT WAS DEFINED AT THE TOP OF THE PAGE.
    // for (i = 0; i < button.length; i += 1) {
    //     button[i].addEventListener('click', (e) => {
    //         e.target.className += "chosen";
    //         const chosen = document.getElementsByClassName('chosen');
    //         console.log(e.target.textContent);
    //         checkLetter(e.target);
    //     })
    // };

});

