let hexColor = document.querySelector('.hex');
let circleColor = document.querySelector('.color');
let circle = document.querySelectorAll('.circ');
let obtiznost = 2;

function correctHexColor(){
    let randomHex = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    let randomCorrectColor = "#"+randomHex;
    return randomCorrectColor;
}
function setHexText(){
    hexColor.innerHTML = correctHexColor();
}
setHexText();


function setCorrectColor(){
    let div = document.createElement('div');
    div.className = "circ";
    div.style.backgroundColor = correctHexColor();
    //div.addEventListener("click", chechIfCorrect());
    circleColor.appendChild(div);
    return div;
}
setCorrectColor();

function setOtherColors(){
    let joe = "#"+Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    let div = document.createElement('div');
    div.className = "circ";
    div.style.backgroundColor = joe;
    //div.addEventListener("click", chechIfCorrect());
    circleColor.appendChild(div);
    return div;
}
setOtherColors();

function chechIfCorrect(){
    
}