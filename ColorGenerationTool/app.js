// import tinycolor from "tinycolor2";


const changeColorBtn = document.getElementById('changeBtn')
const compColorBtn = document.getElementById('compColor')
const resetColorBtn = document.getElementById('resetBtn')
const colorContainer = document.getElementById('colorContainer')
const compColorContainer = document.getElementById('compContainer')
const colorContainerText = document.getElementById('color-text')


function changeColor() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    
    let randomColor = `RGB(${r}, ${g}, ${b})`
    
    console.log(r)
    console.log(g)
    console.log(b)
    
    colorContainer.style.backgroundColor = randomColor 
    colorContainerText.textContent = randomColor

    
    // let color = tinycolor(randomColor);
    // let checkBrightness = color.isDark(); 

    // if(checkBrightness) {
    //     colorContainerText.style.color = "#FFF"
    // } else {
    //     colorContainerText.style = "000"
    // }

} 

function findComplementaryColor() {
    

    let compR = 256 - r
    let compG = 256 - g
    let compB = 256 - b

    console.log(compR)
    console.log(compG)
    console.log(compB)

    let compColor = `rgb(${compR}, ${compG}, ${compB})`
    compColorContainer.style.backgroundColor = compColor
    
}


function resetColor() {
    colorContainer.style.backgroundColor = '#FFF';
    compColorContainer.style.backgroundColor = '#FFF'
    
}


changeColorBtn.addEventListener('click', changeColor)
compColorBtn.addEventListener('click', findComplementaryColor)
resetColorBtn.addEventListener('click', resetColor); 

