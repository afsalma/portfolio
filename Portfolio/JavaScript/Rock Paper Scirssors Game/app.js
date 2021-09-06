let userScore=0;
let computerScore=0;

/* Displaying userScore and computerScore to index.html */
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");

       /* score board */
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result p");

const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");

function convertToWord(letter){

    if(letter ==="r") return "Rock";
    if(letter ==="p") return "Paper";
    return "Scissors";
}

function getComputerChoice(){

    const choices=['r','p','s'];
     //math.random gives random number between 0 and 1
    // math.floor gives a number between 0 and 3
    const randomNumber =Math.floor(Math.random() * 3); 
    return choices[randomNumber]; 
}

function win(userChoice,computerChoice){

    //making fontsize small and making it superscript
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(userChoice);

    userScore++; //increasing user score
    
    //displaying userScore by adding userScore 
    userScore_span.innerHTML=userScore; 
    computerScore_span.innerHTML=computerScore; 

    result_p.innerHTML=` ${convertToWord(userChoice)}${smallUserWord} beats 
                       ${convertToWord(computerChoice)}${smallCompWord} .You win! `;
    
    //adding green glow to the div at which user clicks

        //classList gives an array of classes in the element
    userChoice_div.classList.add('green-glow');
    setTimeout(() =>userChoice_div.classList.
                           remove('green-glow'),3000);
}

function lose(userChoice,computerChoice){

    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(userChoice);

    computerScore++; 
      
    userScore_span.innerHTML=userScore; 
    computerScore_span.innerHTML=computerScore; 

    result_p.innerHTML=` ${convertToWord(userChoice)}${smallUserWord}loses to
                       ${convertToWord(computerChoice)}${smallCompWord} .You lost! `;
                       
    userChoice_div.classList.add('red-glow');
    setTimeout(() =>userChoice_div.classList.
                           remove('red-glow'),3000);
}
function draw(userChoice,computerChoice){
    
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userChoice_div=document.getElementById(userChoice);

    result_p.innerHTML=` ${convertToWord(userChoice)}${smallUserWord} drawed to
                       ${convertToWord(computerChoice)}${smallCompWord} .It is a draw! `;

    userChoice_div.classList.add('gray-glow');
    setTimeout(() =>userChoice_div.classList.
                            remove('gray-glow'),3000);
}
function game(userChoice) {
   const computerChoice=getComputerChoice();
            //running choices of user and Computer
// console.log("user choice =>" +userChoice);
// console.log("computer choice =>"+computerChoice);
   switch(userChoice+computerChoice) {
       case "rp": //user choice is rock ,computer choice is paper
       case "pr": //user choice is paper ,computer choice is rock
       case "sp": //user choice is scissors ,computer choice is paper
        win(userChoice,computerChoice);
        break;

       case "rs":
       case "ps":
       case "sr":
        lose(userChoice,computerChoice);
        break;

       case "rr":
       case "pp":
       case "ss":
        draw(userChoice,computerChoice);
        break;
   }
}

function main() {
    /* click events for rock ,paper and scissors */
    rock_div.addEventListener('click',() =>game("r"));
    paper_div.addEventListener('click',() =>game("p"));
    scissors_div.addEventListener('click',() =>game("s"));
}

main();
       