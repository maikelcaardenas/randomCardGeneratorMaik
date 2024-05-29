const suits = ['♥', '♠', '♣', '♦'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

window.onload = function(){
randomCard;
}

const randomButton = document.querySelector('button');
randomButton.addEventListener ('click' , randomCard);


function randomCard(){
    let randomSuit = Math.floor(Math.random()* suits.length);
    let randomValue = Math.floor(Math.random()* values.length);
    
const suitUp = document.querySelector('.card-header');
const suitMidle = document.querySelector('.card-body');
const suitDown = document.querySelector('.card-footer');

suitUp.classList = ['card-header'];
suitMidle.classList = [ 'card-body'];
suitDown.classList = ['card-footer'];

if(suits[randomSuit] == "♥"){
    suitUp.innerHTML = "♥";
    suitUp.classList.add ("hearth");
    suitMidle.classList.add("hearth");
    suitMidle.innerHTML = values[randomValue];
    suitDown.innerHTML = "♥";
    suitDown.classList.add("hearth");
}
else if (suits[randomSuit] == "♠"){
    suitUp.innerHTML = "♠";
    suitUp.classList.add ("spade");
    suitMidle.classList.add("spade");
    suitMidle.innerHTML = values[randomValue];
    suitDown.innerHTML = "♠";
    suitDown.classList.add("spade");
}
else if (suits[randomSuit] == "♦"){
    suitUp.innerHTML = "♦";
    suitUp.classList.add ("diamond");
    suitMidle.classList.add("diamond");
    suitMidle.innerHTML = values[randomValue];
    suitDown.innerHTML = "♦";
    suitDown.classList.add("diamond");
}
else {
    suitUp.innerHTML = "♣";
    suitUp.classList.add ("club");
    suitMidle.classList.add("club");
    suitMidle.innerHTML = values[randomValue];
    suitDown.innerHTML = "♣";
    suitDown.classList.add("club");
}
};