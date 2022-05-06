let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('Give me a number?', 0);
      this.b = +prompt('Give me another number?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  const quiz = [
    { object: "sky", color: "blue" },
    { object: "grass", color: "green" },
    { object: "wood", color: "brown" },
];
 
  const game = {
    start(quiz){
        this.questions = [...quiz];
        this.score = 0;
        // main game loop5
        for(const question of this.questions){
        this.question = question;
        this.ask();
        }
        // end of main game loop
        this.gameOver();
    },
    ask(){
        const question = `What color is the ${this.question.object}?`;
        const response =  prompt(question);
        this.check(response);
    },
    check(response){
        const answer = this.question.color;
        if(response === answer){
        alert('You got it!');
        this.score++;
        } else {
        alert(`No! The answer is ${answer}`);
        }
    },
    gameOver(){
        alert(`Game Over, you scored ${this.score} point${this.score !== 1 ? 's' : ''}`);
    }
}



game.start(quiz);

