let hexColor = document.querySelector('.hex');
let circleColor = document.querySelector('.color');
let circle = document.querySelectorAll('.circ');
let winText = document.querySelector('.win');
let obtiznost = 2;

const restart = document.querySelector('.restart');

function setDifficulty(ob){
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
    console.log(obtiznost);
    return obtiznost;
}

function correctHexColor(){
    let randomHex = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    let randomCorrectColor = "#"+randomHex;
    return randomCorrectColor;
}
function setHexText(){
    hexColor.innerHTML = correctHexColor();
}

function setCorrectColor(){
    let div = document.createElement('div');
    div.className = "circ";
    div.style.backgroundColor = correctHexColor();
    //div.addEventListener("click", chechIfCorrect());
    circleColor.appendChild(div);
    return div;
}

function setOtherColors(){
    let joe = "#"+Math.floor(Math.random()*16777215).toString(16);
    let div = document.createElement('div');
    div.className = "circ";
    div.style.backgroundColor = joe;
    //div.addEventListener("click", chechIfCorrect());
    circleColor.appendChild(div);
    return div;
}

function chechIfCorrect(){
    if(correctHexColor() === 4){
        winText.innerHTML = "YOU WON!!!";
    }else{
        winText.innerHTML = "WRONG!!!";
    }
}

function reset(){
    obtiznost = 2;
    winText = "";
    StartGame();
}
restart.addEventListener("click", reset);

function StartGame(){
    setHexText();
    for(let i = 0; i < obtiznost; i++){
        if(i === 1){
            setCorrectColor();
        }else{
            setOtherColors();
        }
    }
}
StartGame();