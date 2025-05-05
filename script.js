const container = document.querySelector(".container")
const SquareButton = document.querySelector(".SqauresButton")
let gridSize
function CreateGrids(){
    for (let i=0; i<gridSize; i++){
        const squarediv = document.createElement("div")
        squarediv.style.height = "60px";
        squarediv.style.width = "60px";
        squarediv.style.border = "1px solid black"
        container.appendChild(squarediv)
        squarediv.onmouseover = function(){
            squarediv.style.background = RandomColor()
        }
    }
}


SquareButton.addEventListener("click", () => {
    gridSize = parseInt(prompt("Choose a grid size, MAX 1000"))
    if (gridSize < 1001){
        CreateGrids()
    }else{
        alert("PLease Enter A Valid Number")
    }
    
})


function RandomColor(){
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}