'use strict'
var userName = prompt('Whats your name ?')
//console.log('the user name is ', userName);
document.getElementById('name').textContent = ('welcome  ' + userName)

alert('Hello ' + userName + ' , lets play the guessing game, i will ask you 7 questions ! ');

var sum = 0
var favColor = prompt('my favourite color is blue ? guess the answer yes or no !').toLowerCase();

if (favColor === 'yes') {
    //console.log('the user answerd yes');
    alert('you are correct')
    sum++
} else if (favColor === 'no') {
    //console.log('the user answerd no');
    alert('oops! you are wrong')
}
else {
    console.log('the user answer is', favColor);
    alert('try again!');
}


var favFood = prompt('my favourite food is burger ? guess the answer yes or no !').toLowerCase();

if (favFood === 'yes') {
    //console.log('the user answerd yes');
    alert('you are wrong, its pizza')
} else if (favFood === 'no') {
    console.log('the user answerd no');
    alert('you are correct')
    sum++
}
else {
    console.log('the user answer is', favFood);
    alert('try again!');
}


var favHobby = prompt('Now lets try this ! do i like swimming ? guess the answer yes or no !').toLowerCase();

if (favHobby === 'yes') {
    //console.log('the user answerd yes');
    alert('you are correct')
    sum++
} else if (favHobby === 'no') {
    //console.log('the user answerd no');
    alert('you are wrong')
}
else {
    //console.log('the user answer is', favHobby);
    alert('try again!');
}

var nationality = prompt('am i syrian ? guess the answer yes or no !').toLowerCase();

if (nationality === 'yes') {
    //console.log('the user answerd yes');
    alert('you are correct')
    sum++
} else if (nationality === 'no') {
    //console.log('the user answerd no');
    alert('you are wrong')
}
else {
    //console.log('the user answer is', nationality);
    alert('try again!');
}

var programming = prompt('this is an easy one! do i love programming ? guess the answer yes or no !').toLowerCase();

if (programming === 'yes') {
    //console.log('the user answerd yes');
    alert(userName + ', you are correct')
    sum++
} else if (programming === 'no') {
    //console.log('the user answerd no');
    alert(userName + ', you are wrong')
}
else {
    //console.log('the user answer is', programming);
    alert('try again ' + userName);
}

var number = 7;
var userNumber = prompt('guess a number')
if (userNumber == 7) {
    //console.log('you are correct')
    alert('you are correct')
    sum++
} else if (userNumber != 7) {


    for (var i = 0; i < 4; i++) {

        if (userNumber > 7) {
            //console.log('too high')
            alert('too high')
            userNumber = prompt('try again')


        } else if (userNumber < 7) {
            //console.log('too low')
            alert('too low')
            userNumber = prompt('try again')


        } else {

            //console.log('you are correct')
            alert('you got it correct')
            sum++
            break;
        }
    }
    alert('the correct answer is 7')
}



var userNumber2 = prompt('guess one of four numbers')
var arraynumbers = [3, 9, 4];

    for (var i = 0; i < 6; i++) {
        if (userNumber2 == 3 || userNumber2 == 9 || userNumber2 == 4) {
            //console.log('you are correct')
            alert('you got it correct')
            sum++
            break;

        } else {

            alert('try again');
            userNumber2 = prompt('guess one of four numbers')

        }

    }


alert('the correct numbers are 3,9,4')
alert('you got ' + sum + ' correct out of the 7 questions asked')

