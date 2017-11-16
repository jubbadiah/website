var myMusic ='Dubstep';
var age ='25';
var peopleKilled='0';
console.log('My favorite music:'+myMusic);
console.log(age);
console.log(peopleKilled);

var dubstepFan = 'true';
if (dubstepFan) {
  console.log('Have a fit')
} else {
  console.log('You are a dick')
}

var hungerLevel = 10
if (hungerLevel > 7)
  console.log('Time to eat!')
else (hungerLevel < 7)
	console.log('Let\'s eat later.')

var genre = 'Dubstep';
var bass = true;

  if (genre === 'Dubstep' && bass) {
  console.log('Best Choice');
}	else if(genre==='Hard House'){
  console.log('Not Bad');
}	else if(genre==='Bassline'){
  console.log('Nearly There');
  }	else {
  console.log('Boring');
  }

console.log('Anti-Vibes','Boss');
console.log(1 + 1);
console.log(1 % 250);
console.log(Math.floor(Math.random() * 50));



var orderCount = 0;

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
orderCount=orderCount+1

}

function getSubTotal(itemCount) {
  return itemCount * 7.5;
}

takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');
console.log(getSubTotal(orderCount));

//single line comment//
/*single line comment//
