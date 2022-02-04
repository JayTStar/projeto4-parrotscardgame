let cardNum;
const cards = ["bobrossparrot", "explodyparot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"];
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

function displayCards(size){
    const local = document.querySelector("main");

    for(i=0; i<size; i++){
        local.innerHTML = local.innerHTML + `<div onclick=(turnCard(this)) class="card"><img class="card-front" src="./Mídias/front.png" alt="Parrot_front"><img class="card-back hidden" src="./Mídias/${cards[i]}.gif" alt=""></div>`
    }
}

function turnCard(card){
    const front = card.querySelector(".card-front");
    const back = card.querySelector(".card-back");
    front.classList.toggle("hidden");
    back.classList.toggle("hidden")
}