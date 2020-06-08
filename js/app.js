'use strict'
var userName =prompt('Whats your name ?')
console.log('the user name is ', userName);
document.getElementById('name').textContent=('welcome  '+ userName )

alert ('Hello ' + userName + ' , lets play the guessing game, i will ask you 5 questions about Me! ');

var favColor = prompt('my favourite color is blue ? guess the answer yes or no !').toLowerCase();

if (favColor === 'yes') {
    console.log('the user answerd yes');
    alert ('you are correct')
} else if (favColor=== 'no'){
    console.log('the user answerd no');
    alert('oops! you are wrong')
}
else {
    console.log('the user answer is', favColor);
    alert ('try again!');
}


var favFood = prompt('my favourite food is burger ? guess the answer yes or no !').toLowerCase();

if (favFood === 'yes') {
    console.log('the user answerd yes');
    alert ('you are wrong, its pizza')
} else if (favFood=== 'no'){
    console.log('the user answerd no');
    alert('you are correct')
}
else {
    console.log('the user answer is', favFood);
    alert ('try again!');
}


var favHobby = prompt('Now lets try this ! do i like swimming ? guess the answer yes or no !').toLowerCase();

if (favHobby === 'yes') {
    console.log('the user answerd yes');
    alert ('you are correct')
} else if (favHobby=== 'no'){
    console.log('the user answerd no');
    alert('you are wrong')
}
else {
    console.log('the user answer is', favHobby);
    alert ('try again!');
}

var nationality = prompt('am i syrian ? guess the answer yes or no !').toLowerCase();

if (nationality === 'yes') {
    console.log('the user answerd yes');
    alert ('you are correct')
} else if (nationality=== 'no'){
    console.log('the user answerd no');
    alert('you are wrong')
}
else {
    console.log('the user answer is', nationality);
    alert ('try again!');
}

var programming = prompt('this is the last one and its easy! do i love programming ? guess the answer yes or no !').toLowerCase();

if (programming === 'yes') {
    console.log('the user answerd yes');
    alert ('you are correct than you ', userName)
} else if (programming=== 'no'){
    console.log('the user answerd no');
    alert('you are wrong thank you for your time ', userName)
}
else {
    console.log('the user answer is', programming);
    alert ('try again ', userName);
}
