let cardNum;
const cards = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
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
    const gameCards = [];

    for(i=0; i<(size/2); i++){
        for(j=0;j<2;j++){
            gameCards.push(cards[i]);
        }
    }

    gameCards.sort(random);

    const local = document.querySelector("main");

    for(i=0; i<size; i++){
        local.innerHTML = local.innerHTML + `<div onclick="turnCard(this)" class="card"> <img class="card-front" src="./Mídias/front.png" alt="Card's front face"> <img class="card-back hidden" src="./Mídias/${gameCards[i]}.gif" alt="Card's back face"> </div>`
    }
    
}

function turnCard(card){
    const front = card.querySelector(".card-front");
    const back = card.querySelector(".card-back");
    front.classList.toggle("hidden");
    back.classList.toggle("hidden");
}

function checkSide(card){
    const front = card.querySelector(".card-front");

    if((front.classList.contains("hidden")) === true){
        console.log("carta aberta");
        return(true);
    }
    else{
        console.log("carta fechada");
        return(false);
    }
}