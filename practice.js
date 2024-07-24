let boxes = document.querySelectorAll(".box");
let re = document.querySelector(".restart");
let win = document.querySelector(".hide");
let Re = document.querySelector(".Restart")

let player = true;
const winCondition = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,6],
]
const resetGame = () =>{
    player = true;
    enable()
    win.classList.add("hide")
}
boxes.forEach((box) => {
  box.addEventListener('click',() =>{
    if(player){
        box.innerText = 'X';
        player = false
    }else{
        box.innerText= 'O'
        player = true
    }
    box.disabled = true

    checkWinner()
  });  
});
let disable = () =>{
    for(let box of boxes){
        box.disabled = true ;
    }
}
let enable = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}    
let showWinner = () =>{
    win.classList.remove("hide")
    disable()
}

let checkWinner = () =>{
    for(let pattern of winCondition){
        pos1Val = boxes[pattern[0]].innerText;
        pos2Val = boxes[pattern[1]].innerText;
        pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != '' && pos2Val != '' && pos3Val != ''){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        
        }
    }
}
re.addEventListener("click",resetGame)
Re.addEventListener("click",resetGame)