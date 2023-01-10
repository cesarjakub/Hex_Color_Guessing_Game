const hexColor = document.querySelector('.hex');

function correctHexColor(){
    let randomHex = Math.floor(Math.random()*16777215).toString(16).toUpperCase();
    let randomColor = "#"+randomHex;
    hexColor.innerHTML = randomColor;
    return randomColor;
}
correctHexColor();