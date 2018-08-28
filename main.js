const imaString = 'hi';
console.log('hi');

const age = 99;
if (age < 21) {
    console.log('No get out!'); 
} else {
        console.log('Come on in!');
    }


/*if(age < 21) {
    console.log('stay away!');
} else {
    console.log('partay!');
}

if(age >= 21) {
    console.log('call an uber');
} else {
    console.log('bring your fake id next time');
}*/

const authenticated = false;
if(authenticated){ //shortened way of saying if authenticated === true; it's understood that it is. 
    console.log('you are now logged in');
} else {
    console.log('you need to log in');
}

const a = 1; 
const b = '1';

/*a === b //false
a == b //true 
//OR
a !== b//true
a != b//false*/

const favoriteColor = 'green';
const favoriteAnimal = 'otter';

if (favoriteAnimal === 'otter' && favoriteColor === 'blue'){
    console.log('welcome to the club')
} else if (favoriteAnimal === 'cat' || favoriteColor === 'red'){
    console.log('$500 to join the club');
} else {
    console.log('go away');
}

const hiDiv = document.getElementById('hi');
console.log(hiDiv);



const pie = 'peach';
console.log('pie length: ', pie.length);
console.log('#3', pie.charAt(2));// will return an a because that's the 3rd character
console.log('indexof cat', pie.indexOf('cat'));// will return -1, which means it basically doesn't exist
console.log('indexof pea', pie.indexOf('pea'));// will return 0 because that is the beginning of the start of the characters of 'pea'

const quote = 'winter is coming';
const newQuote = quote.replace(/is/g, "ain't");//g means globally; regular expression
console.log('newQuote', newQuote);




//objects do not really matter as far as order, while arrays need order. 

const fancyObject = {};

fancyObject.color = 'red';
fancyObject['number'] = 10;
console.log("fancyObject", fancyObject);


