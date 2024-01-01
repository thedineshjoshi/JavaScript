let player1 = prompt("Enter Player1 Name");
let player2 = prompt("Enter player2 Name");
let clickBtn = document.querySelectorAll(".clickbtn");
let players = document.querySelector("#player");
let _winner = document.querySelector("#winner");
let turn0 = true;
let count = 0;

const winners = [
    [0,1,2,],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

clickBtn.forEach((clickbtn) => {
    player.innerText = `Turn of ${player1}`;

    clickbtn.addEventListener("click",()=>
    {
        if (turn0)
        {
            player.innerText = `Turn of ${player2}`;
            clickbtn.innerText = "O"; 
            turn0 = false;
        }
        else
        {
            player.innerText = `Turn of ${player1}`;
            clickbtn.innerText = "X";
            turn0 = true;
        }
        clickbtn.disabled = true;
        count++;
        let isWinner = checkwinner();
        if (count === 9 && !isWinner) {
            gameDraw();
          }
    }
)})

const checkwinner = () => {

  for(let pattern of winners) {
    let pos1val = clickBtn[pattern[0]].innerText;
    let pos2val = clickBtn[pattern[1]].innerText;
    let pos3val = clickBtn[pattern[2]].innerText;

    if(pos1val != "" && pos2val != "" && pos3val !="")
    {
    if(pos1val === pos2val && pos2val === pos3val)
    {
        
        if(pos1val === "O")
        { 
            players.innerText = null;
            _winner.innerText = `Winner is ${player1}`;
            disableBoxes();
        }
        else
        {
            players.innerText = null;
            _winner.innerText = `Winner is ${player2}`;
            disableBoxes();
            
        }
    }
}
  }  

}

function gameDraw()
{
    _winner.innerText = "Match Draw";
}

const disableBoxes = () => {
    for (let box of clickBtn) {
      box.disabled = true;
    }
  };