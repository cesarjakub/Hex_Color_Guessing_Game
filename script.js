let hexColor = document.querySelector('.hex');
let circleColor = document.querySelector('.color');
let circle = document.querySelectorAll('.circ');
let winText = document.querySelector('.win');
let obtiznost = 2;
let randomCorrectColor;

const restart = document.querySelector('.restart');

StartGame();

function setDifficulty(ob){
    circleColor.innerHTML = "";
        if(ob === 2){
        obtiznost = 2
        StartGame();
    }else if(ob === 3){
        obtiznost = 3;
        StartGame();
    }else if(ob === 4){
        obtiznost = 4;    
        StartGame();
    }
    return obtiznost;
}

function printColors(){
    let randomPozice = Math.floor(Math.random() * obtiznost);
    for(let i = 0; i < obtiznost; i++){
        if(i === randomPozice){
            setCorrectColor();
        }else{
            setOtherColors();
        }
    }
}

function correctHexColor(){
    let randomHex = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    randomCorrectColor = "#"+randomHex;
    console.log(randomCorrectColor);
    return randomCorrectColor;
}
function setHexText(){
    hexColor.innerHTML = randomCorrectColor;
}


function setCorrectColor(){
    let div = document.createElement('div');
    div.className = "circ";
    div.style.backgroundColor = randomCorrectColor;
    circleColor.appendChild(div);
    return div;
}
setCorrectColor().addEventListener("click", chechIfCorrect);

function setOtherColors(){
    let joe = "#"+Math.floor(Math.random()*16777215).toString(16);
    let div = document.createElement('div');
    div.className = "circ";
    div.style.backgroundColor = joe;
    circleColor.appendChild(div);
    return div;
}
setOtherColors().addEventListener("click", chechIfCorrect);

function chechIfCorrect(){
    if(randomCorrectColor === 3){
        winText.innerHTML = "YOU WON!!!";
    }else{
        winText.innerHTML = "WRONG!!!";
    }
}

function StartGame(){
    correctHexColor();
    setHexText();
    printColors();
}

function reset(){
    circleColor.innerHTML = "";
    obtiznost = 2;
    winText.innerHTML = "";
    StartGame();
}
restart.addEventListener("click", reset);