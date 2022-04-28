const question = "Did you do your HomeWork?"
const answer = prompt(question);
alert(`You answered ${answer}`);

const quiz = new Map([
    ["What is the color of the sky?","blue"],
    ["What is the color of grass?","green"],
    ["What is the color of wood?","brown"]
  ]);

 // initialize score
let score = 0;

for(const [question,answer] of quiz.entries()){

  // get answer from user
  const response = prompt(question);
  // check if answer is correct
  if(response === answer){
    alert('Correct!');
    // increase score by 1
    score++;
  } else {
    alert(`Wrong! The correct answer was ${answer}`);
  }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score > 1 ? 's' : ''}`);

// Set the questions
const quiz2 = [
    ["Incase, you missed it the first time. What is the color of the sky?","blue"],
    ["What is the color of grass?","green"],
    ["What is the color of wood?","brown"]
  ];

function start(quiz2){
  // initialize score
   let score = 0;

  // main game loop
  for(const [question,answer] of quiz2){
    const response = ask(question);
    check(response,answer);
  }
  // end of main game loop

  gameOver();

  // function declarations
  function ask(question){
    return prompt(question);
  }

  function check(response,answer){
    // check if answer is correct
    if(response === answer){
      alert('Correct!');
      // increase score by 1
      score++;
    } else {
      alert(`Wrong! The correct answer was ${answer}`);
    }
  }

  function gameOver(){
    // At the end of the game, report the player's score
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);
  }
}

start(quiz2);