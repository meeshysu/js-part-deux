console.log('heeeeyyyyy');

const cats =['fluffy', 'sal', 'abby', 'axel'];
console.log('First cat', cats[0]);

//going from a string to an array
//split breaks apart an array into separate pieces
const favoriteAnimal = 'otter';
const favoriteAnimalArray = favoriteAnimal.split(''); //['o', 't', 't', 'e', 'r']; bc you want it to split on every character, you put some quotes in an empty (""). if you want to split on an actual character, you put it in the quotes 't'.
// if you have more than one animal, for instance 'cow,bear,dog,cat' then you would use (',') in the parenthesis.
console.log('favoriteAnimalArray', favoriteAnimalArray);

//join sticks something back into an array
const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('');
console.log('newNum', newNum);

//mini challenge, split then reverse then join it 



const palChecker = (word) => {
    // const wordArray = word.split('').join('');
    // const reverseArray = word.split('').reverse()join('');
    const reverseWord = word.split('').reverse().join(''); //literally just splitting to reverse it, then join it back together to see if it is a palindrome. AND the () does not need anything within the reverse section because we are just wanting to CALL it. we don't need something inside of them. 

    // !!!! word is a string. split is a string method. reverse is an array method but because the string and split combined is now an array, you can use it. join is also an array method. (i believe)
if(word === reverseWord) {
    console.log(`${word} IS a palindrome`);
} else {
    console.log(`${word} NOT a palindrome`)
}
};

palChecker('mom');
palChecker('monkeybutt');
palChecker('racecar');


let animals = ['otter', 'cat', 'dog', 'bird']

const lastItem = animals.pop();// this should remove bird
const firstItem = animals.shift();//removes the first item, otter
animals.push('bat');
animals.unshift('baby hippo');
console.log('animals');

//FOR LOOPS:
//1. What is your starting value? Most of the time it's going to be - 0
//2. What is your stopping value? Most of the time something.length
//3. How are you incrementing? +1 

//for(starting;stopping; increment){
    //do something here
//}

for(let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}