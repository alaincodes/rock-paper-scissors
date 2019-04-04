// ROCK PAPER SCISSORS THE ODIN PROJECT
const p_rock = document.getElementById('p_rock');
const p_paper = document.getElementById('p_paper');
const p_scissors = document.getElementById('p_scissors')

const c_rock = document.getElementById('c_rock');
const c_paper = document.getElementById('c_paper');
const c_scissors = document.getElementById('c_scissors');

const p_score = document.getElementById('p_score');
const c_score = document.getElementById('c_score');

const getResult = document.getElementById('result');

const resetBtn = document.getElementById('resetBtn');

let player_choice = '';
let computer_choice = '';

let player_score = 0;
let computer_score = 0;

function win() {
  player_score++;
  p_score.innerHTML = player_score;
  c_score.innerHTML = computer_score;
  getResult.innerHTML = `${player_choice} beats ${computer_choice}`;
}

function lose() {
  computer_score++;
  p_score.innerHTML = player_score;
  c_score.innerHTML = computer_score;
  getResult.innerHTML = `${computer_choice} beats ${player_choice}`;
}

function draw() {
  p_score.innerHTML = player_score;
  c_score.innerHTML = computer_score;
  getResult.innerHTML = `IT'S A TIE`;
}

p_rock.addEventListener('click', () => {
  player_choice = 'rock';
  p_rock.setAttribute('style', "background: green;");
  computerPlay();
  playRound(player_choice, computer_choice);
});

p_paper.addEventListener('click', () => {
  player_choice = 'paper';
  p_paper.setAttribute('style', "background: green;");
  computerPlay();
  playRound(player_choice, computer_choice);
});

p_scissors.addEventListener('click', () => {
  player_choice = 'scissors';
  p_scissors.setAttribute('style', "background: green;");
  computerPlay();
  playRound(player_choice, computer_choice);
});

// Random number between 0, 1 or 2 (Rock, Paper or Scissors)
let computerPlay = () => {
  const comp_choice = Math.floor(Math.random() * 3);

  if (comp_choice === 0) {
    c_rock.setAttribute('style', "background: green;");
    computer_choice = "rock";
  } else if (comp_choice === 1) {
    c_paper.setAttribute('style', "background: green");
    computer_choice = "paper";
  } else {
    c_scissors.setAttribute('style', "background: green");
    computer_choice = "scissors";
  }
}


// function playRound(player_choice, computer_choice) {
//   if (player_choice === computer_choice) { 
//     draw();
//    } 

//   if (player_choice === "rock") {
//     if (computer_choice === "scissors") {
//       win();
//     } else { lose(); }
//   }

//   if (player_choice === "scissors") {
//     if (computer_choice === "rock") {
//       lose();
//     } else { win(); }
//   }

//   if (player_choice === "paper") {
//     if (computer_choice === "rock") { 
//       lose();
//     } else { win(); }
//   }
// };

function playRound(player_choice, computer_choice) {
  const pc = player_choice;
  const cc = computer_choice;

  switch (pc + cc) {
    case "rock" + "scissors":
    case "paper" + "rock":
    case "scissors" + "paper":
    win();
    break;
    case "rock" + "paper":
    case "paper" + "scissors":
    case "scissors" + "rock":
    lose();
    break;
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
    draw();
    break;
  }
};

resetBtn.addEventListener('click', () => {
  playAgain(player_choice, computer_choice);
})

function playAgain() {
  p_rock.removeAttribute('style', "background: green;");
  p_paper.removeAttribute('style', "background: green;");
  p_scissors.removeAttribute('style', "background: green;");

  c_rock.removeAttribute('style', "background: green;");
  c_paper.removeAttribute('style', "background: green;");
  c_scissors.removeAttribute('style', "background: green;");

  p_score.innerHTML = 0;
  c_score.innerHTML = 0;
}