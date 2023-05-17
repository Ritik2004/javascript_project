const buttons = document.querySelectorAll("button");
const ans = document.getElementById("result");
let playerScore1 = document.getElementById("user-score");
let compScore1 = document.getElementById("computer-score")
let playerScore = 0;
let compScore = 0;
buttons.forEach((button)=>{
    button.addEventListener("click", () => {
        console.log(`you click button with id`, button.id)
        const comp = computerClick();
        console.log(comp)
        const result = winner(button.id,comp);
       console.log(result)
       ans.textContent = result
})
})

function computerClick(){
    const choices = ["rock","paper","scissor"];
    const index = Math.floor(Math.random()*choices.length)
    return choices[index];
}


function winner(playerSelection, computerSelection){
    console.log(playerSelection)
    console.log(computerSelection)

    if(playerSelection === computerSelection){
        return "It is a tie"
    }else if(
        (playerSelection === "rock" && computerSelection === "scissor")||(playerSelection === "paper" && computerSelection === "rock") ||(playerSelection === "scissor" && computerSelection === "paper")
         )
         {
            playerScore++;
            playerScore1.textContent = playerScore;
            return "You Win " + playerSelection+" beats "+computerSelection
         }
         else{
            compScore++;
            compScore1.textContent = compScore 
            return "You Loose " + computerSelection +" beats " + playerSelection
         }
}