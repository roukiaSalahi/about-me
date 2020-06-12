'use strict';
var userName = prompt('Whats your name ?');
document.getElementById('name').textContent = ('welcome  ' + userName);

alert('Hello ' + userName + ' , lets play the guessing game, i will ask you 7 questions ! ');

var sum = 0;

function askQuestion(questionText, correctAnswer) {
  var input = prompt(questionText).toLowerCase();

  if ((input === "yes" || input === "no") && (input === correctAnswer)) {
    alert('you are correct');
    sum++;
    alert('you got ' + sum + ' correct out of the 7 questions asked');
  } else if ((input === "yes" || input === "no") && (input !== correctAnswer)) {
    alert('you are wrong!');
  }
  else {
    console.log('the user answer is', input);
    askQuestion(questionText, correctAnswer);
  }
}

function askColor(){
  const questionText = 'my favourite color is blue ? guess the answer yes or no !';
  askQuestion(questionText, "yes");
}

function askFood() {
  const questionText = 'my favourite food is burger ? guess the answer yes or no !';
  askQuestion(questionText, "no");
}

function askHobby(){
  const hoppyQuestionText = 'Now lets try this ! do i like swimming ? guess the answer yes or no !';
  askQuestion(hoppyQuestionText, "yes");
}

function askNationality(){
  const text = "am i syrian ? guess the answer yes or no !";
  askQuestion(text, "yes");
}

function askProgramming() {
  const text = "this is an easy one! do i love programming ? guess the answer yes or no !";
  askQuestion(text, "yes");
}


askColor();
askFood();
askHobby();
askNationality();
askProgramming();


var number = 8;
var userNumber = prompt('guess a number');
if (userNumber === number) {
    
    alert('you are correct')
    sum++
} else if (userNumber != number) {
    for (var i = 0; i < 4; i++) {
        if (userNumber > number) {
            
            alert('too high')
            userNumber = prompt('try again')
        } else if (userNumber < number) {
            
            alert('too low')
            userNumber = prompt('try again')
        } else {
            
            alert('you got it correct')
            sum++
            break;
        }
    }
    alert('the correct answer is' + number);
}



var userNumber2 = prompt('guess one of four numbers')
var arraynumbers = [3, 9, 4];

    for (var i = 0; i < 6; i++) {
        if (userNumber2 == 3 || userNumber2 == 9 || userNumber2 == 4) {
            
            alert('you got it correct')
            sum++
            break;

        } else {

            alert('try again');
            userNumber2 = prompt('guess one of four numbers')

        }

    }


alert('the correct numbers are 3,9,4')
