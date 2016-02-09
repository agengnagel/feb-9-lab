// JS file for Feb 8 class demo
var userName = prompt('What is your name?');
console.log ('The user said their name is ' + userName);
alert('Hello! ' + userName + '!!!');

var userCheese = prompt ('What is your favorite cheese?');
console.log ('The user likes '+ userCheese);
alert ('So, ' + userName + 'lets have some fun with that ' + userCheese);

var userWine = prompt (userName + ', do you want some wine with that cheese?');
console.log ('Wine should always be consumed alongside cheese');
alert ('Lets have something to eat too');

var userSand = prompt (userName + ' , what kind of sandwich would you make with that' + userCheese);
console.log (userName + 'wants to make a '+ userSand + ' sandwich.');
alert ('A ' +userSand + ' sounds delicious!');

var userPlace = prompt (userName + ' where do you want to go to eat your '+ userSand '?');
console.log(userName + 'wants to go to ' + userPlace);
alert ('Hopefully the weather is nice at ' + userPlace);

var userWeather = prompt ('Do you know that the weather is going to be, ' +userName +'?');
console.long (userName +' predicts the weather to be 'userWeather);
alert ('I hope you are correct!');
