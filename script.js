let hexColor = document.querySelector('.hex');
let circleColor = document.querySelector('.color');

const difftwo = document.querySelector('.diff2');
const diffthree = document.querySelector('.diff3');
const difffour = document.querySelector('.diff4');

function correctHexColor(){
    let randomHex = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    let randomColor = "#"+randomHex;
    hexColor.innerHTML = randomColor;
    return randomColor;
}
correctHexColor();

function diff(pocet){
    const d = document.createElement('div');
    d.className = "circ";
    for(let i = 0; i < pocet; i++){
        circleColor.appendChild(d);
    }
}
difftwo.addEventListener("click", diff(2));
diffthree.addEventListener("click", diff(4));
difffour.addEventListener("click", diff(5));


function randomCircleColor(){

}