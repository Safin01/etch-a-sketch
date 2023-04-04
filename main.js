let dafault_color = "black";
let click = false;


document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    document.querySelector("body").addEventListener("click",function(e){
        if(e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if(click){
                draw.innerHTML = "Now you can draw";
            }else{
                draw.innerHTML = "you are not allowed to draw";
            }
        }
    })


    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click",function(){
        let size = getSize();
        createBoard(size);
    })
});

function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let numDivs = size * size;

    for(let i = 0; i<numDivs; i++){
        let div = document.createElement("div");
        div.setAttribute("id", "grid-div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend",div)
    }
}

function getSize(){

    let input = prompt("Select size of the board");
    let msg = document.querySelector("#msg");
    if(input == ""){
        msg.innerHTML = "Please provide a number";
    }else if(input < 0 || input > 100){
        msg.innerHTML = "Provide a number between 0 and 100";
    }else{
        msg.innerHTML= "Now you play";
        return input;
    }
}

function colorDiv(){
    if(click){
        if(color== "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = "black";
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function reset(){
    let divs = document.querySelectorAll("#grid-div");
    divs.forEach((div) => div.style.backgroundColor = "white");
    
}