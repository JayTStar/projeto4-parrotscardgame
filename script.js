let cardNum;
const cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
const gameCards = [];
let turnedCards = [];
let turnedLength = 0;
let cardsLeft = 0;
let jogadas = 0;

startGame();

function startGame(){
    do{
        cardNum = prompt("Insira um número");
    }while( numCheck(cardNum) === false);

    displayCards(cardNum);
}

function numCheck (num){
    if(num >= 4 && num <= 14){
        console.log("ta no intervalo");

        if(num%2 == 0){
            console.log("é par");
            return(true);
        }
        else{
            console.log("não é par");
            return(false);
        }
    }
    else{
        console.log("não tá no intervalo");
        return(false);
    }
}

function random() { 
	return Math.random() - 0.5; 
}

function displayCards(size){
    const local = document.querySelector("main");

    console.log(gameCards);

    for(i=0; i<(size/2); i++){
        for(j=0;j<2;j++){
            gameCards.push(cards[i]);
            gameCards.sort(random);
            console.log(gameCards);
        }
    }

    for(i=0; i<size; i++){
        cardsLeft++
        local.innerHTML = local.innerHTML + `<div onclick="turnCard(this)" class="card" id="${gameCards[i]}"> <img class="card-front show" src="./Mídias/front.png" alt="Card's front face"> <img class="card-back hidden" src="./Mídias/${gameCards[i]}.gif" alt="Card's back face"> </div>`
    }
    
}

function turnCard(card){
    const front = card.querySelector(".card-front");
    const back = card.querySelector(".card-back");

    const getCards = document.querySelectorAll(`#${turnedCards[0]}`);
    const cardsInGame = Array.prototype.slice.call(getCards);

    checkSide();
    if(parseInt(checkSide()) < 2){
        front.classList.toggle("hidden");
        back.classList.toggle("hidden");
        front.classList.toggle("show");
        back.classList.toggle("show");
        jogadas++
    }
    if(parseInt(checkSide()) === 2){
        console.log("Tem duas cartas viradas");
        checkCards();
    }
    checkSide();
    endGame();
}

function checkSide(){
   const getCards = document.querySelectorAll(".card");
   const cardsInGame = Array.prototype.slice.call(getCards);
   let selectedCards = 0;
   turnedCards = [];

   for(i=0;i<cardNum;i++){
        let cardChecking = cardsInGame[i].querySelector(".card-front");
        let checkHidden = cardChecking.classList.contains("hidden");
        let checkScore = cardChecking.parentElement.classList.contains("score");

        if(checkHidden === true && checkScore === false){
            console.log("Carta selecionada")
            selectedCards ++
            turnedCards.push(cardsInGame[i].id);
        }
        else{
            console.log("carta não selecionada");
        }
   }

   turnedLength = turnedCards.length;

   console.log(selectedCards);
   return(selectedCards);
}

function checkCards(){
    const getCards = document.querySelectorAll(`#${turnedCards[0]}`);
    const cardsInGame = Array.prototype.slice.call(getCards);
    checkSide();
    if(turnedCards[0] === turnedCards[1]){
        console.log("são iguais")

        cardsLeft = cardsLeft - 2;

        for(i=0;i<2;i++){
            cardsInGame[i].removeAttribute("onclick");
            cardsInGame[i].classList.add("score");
        }
        
    }
    if(turnedCards[0] != turnedCards[1]){
        console.log("não são iguais");

        setTimeout(restart,1000);
    }
}

function restart(){
    const getCardsFront = document.getElementsByClassName("card-front hidden");
    const cardsInGameFront = Array.prototype.slice.call(getCardsFront);

    const getCardsBack = document.getElementsByClassName("card-back show");
    const cardsInGameBack = Array.prototype.slice.call(getCardsBack);

    let length = getCardsBack.length

    console.log(length)
    console.log(length)

    for(i=0; i<length; i++){

        if(cardsInGameFront[i].parentElement.classList.contains("score") === false){

            console.log("não está marcada")
            cardsInGameFront[i].classList.toggle("hidden");
            cardsInGameBack[i].classList.toggle("hidden");
            cardsInGameFront[i].classList.toggle("show");
            cardsInGameBack[i].classList.toggle("show");
        }
        
    }
    
}

function endGame(){
    if(cardsLeft == 0){
        alert(`Voce terminou o jogo em ${jogadas} jogadas`);
    }
}