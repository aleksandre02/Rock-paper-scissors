const jeiraniButtons = document.querySelectorAll('.jeirani-b')
const potionButtons=document.querySelectorAll(".item-boxes")
let playerBox=document.getElementById("motamashe")
let choices=["✂️", "📄", "🪨"]
let computerBox=document.getElementById("roboti")
//player stats
const playerStartingHp=3
const computerStartingHp=3
let playerHp=playerStartingHp
let computerHp=computerStartingHp
let playercoins=0
//hp win lose 
const computerHpBar=document.querySelector(".computer-hp-background")
const playerHpBar=document.querySelector(".player-hp-background")
const resultWin=document.querySelector(".win")
const resultLost=document.querySelector(".lost")
const resultTie=document.querySelector(".tie")
const resultPlaceholder=document.querySelector(".placeholder")
const currencyNumber=document.querySelector(".currency-number")




function restartGame(){
  playerHp=playerStartingHp
  computerHp=computerStartingHp
  playerHpBar.style.width="100%"
  computerHpBar.style.width="100%"
  showResult("placeholder")
}

function showResult(choice){
  if (choice==="win"){
    resultWin.style.display="block"
    resultLost.style.display="none"
    resultTie.style.display="none"
    resultPlaceholder.style.display="none"
  }
  else if (choice==="lose"){
    resultWin.style.display="none"
    resultLost.style.display="block"
    resultTie.style.display="none"
    resultPlaceholder.style.display="none"
  }
  else if(choice==="tie"){
    resultWin.style.display="none"
    resultLost.style.display="none"
    resultTie.style.display="block"
    resultPlaceholder.style.display="none"
  }
  else if(choice==="placeholder"){
    resultWin.style.display="none"
    resultLost.style.display="none"
    resultTie.style.display="none"
    resultPlaceholder.style.display="block"
  }
}


jeiraniButtons.forEach(button => {
    button.addEventListener("click", function(){
        let playerChoice=button.innerHTML
        playerBox.innerHTML=playerChoice
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerBox.innerHTML=computerChoice
        if((playerChoice==="✂️"&& computerChoice==="📄")||
            (playerChoice==="📄"&& computerChoice==="🪨")||
            (playerChoice==="🪨"&& computerChoice==="✂️")
        ){
          computerHp--
          computerHpBar.style.width=`${(computerHp / computerStartingHp) * 100}%`
          showResult("win")
          
        }
        else if((computerChoice==="✂️"&& playerChoice==="📄")||
                (computerChoice==="📄"&& playerChoice==="🪨")||
                (computerChoice==="🪨"&& playerChoice==="✂️")
        ){
          playerHp--
          playerHpBar.style.width=`${(playerHp / playerStartingHp) * 100}%`
          showResult("lose")
        }
        else{
          showResult("tie")
        }
        console.log("player- ",playerHp ," enemy- ",computerHp)
        if(computerHp===0){
          restartGame()
          playercoins++
          currencyNumber.innerHTML=playercoins
          //playerwins here
        }
        else if(playerHp===0){
          restartGame()
         //computer wins here
        }
        

    })
})
console.log("player- ",playerHp ," enemy- ",computerHp)

