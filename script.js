let hexColor = document.querySelector('.hex');
let circleColor = document.querySelector('.color');
let circle = document.querySelectorAll('.circ');
let winText = document.querySelector('.win');
let obtiznost = 2;
let randomCorrectColor;

const restart = document.querySelector('.restart');


function setDifficulty(difficulty){
    circleColor.innerHTML = "";
        if(difficulty === 2){
        obtiznost = 2
        StartGame();
    }else if(difficulty === 3){
        obtiznost = 3;
        StartGame();
    }else if(difficulty === 4){
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
    div.id = randomCorrectColor;
    div.style.backgroundColor = randomCorrectColor;
    div.addEventListener("click", function(){ checkIfCorrect(randomCorrectColor) });
    circleColor.appendChild(div);
    return div;
}

function setOtherColors(){
    let randomOtherColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    let div = document.createElement('div');
    div.className = "circ";
    div.classList.add("wrong");
    div.id = randomOtherColor;
    div.style.backgroundColor = randomOtherColor;
    div.addEventListener("click", function(){ 
        checkIfCorrect(randomOtherColor) 
        div.remove();
    });
    circleColor.appendChild(div);
    return div;
}


function checkIfCorrect(generatedColor){
    if(randomCorrectColor === generatedColor){
        winText.innerHTML = "YOU WON!!!";
        let wrongColors = document.querySelectorAll('.wrong');
        wrongColors.forEach(element => {
            element.remove();
        });
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
    obtiznost = 2;
    circleColor.innerHTML = "";
    winText.innerHTML = "";
    StartGame();
}
restart.addEventListener("click", function(){ reset() });

StartGame();