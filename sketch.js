var canva;
var database;
var gameState = 0;
var contestantCount;
var contestant,quiz,question;
var allContestants;


function setup(){
  canvas = createCanvas(1050,600);
 database=firebase.database();
  console.log(database);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("gold");
  if(contestantCount===4)
  {
    quiz.update(1);
  }

  if(gameState===1)
  {
    quiz.play();
  }
  
}

