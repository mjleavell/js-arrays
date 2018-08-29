//*****************ARRAY METHODS*************** 
const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat: ', cats[0]);

// SPLIT METHOD
//const favoriteAnimal = 'cow';
// inside () of split, you have to put what you want to split on
//const favoriteAnimalArray = favoriteAnimal.split('');   //['c', 'o', 'w']
//console.log('favoriteAnimalArray', favoriteAnimalArray);

const favoriteAnimal = 'cow,bear,dog,cat';
// inside () of split, you have to put what you want to split on
const favoriteAnimalArray = favoriteAnimal.split(',');   //[cow, bear, dog, cat]
console.log('favoriteAnimalArray', favoriteAnimalArray);


// JOIN METHOD (OPPPOSITE OF SPLIT)
const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('');
console.log('newNum', newNum);  // [12345]

// MINI CHALLENGE
// write me a function that tells me if that word is a palindrome
// reverse is an array method, so you have to make it an array hence splitting
const palChecker = (word) => {
    const reverseWord = word.split('').reverse().join('');  //splitting word, reversing letters, joining
    if (word === reverseWord) {
        console.log(`${word} IS a palindrome`)
    } else {
        console.log(`${word} is NOT a palindrome`);
    }
}
palChecker('hannah'); //yes
palChecker('racecar'); //yes
palChecker('maggie'); //no


// PUSH, POP, SHIFT, UNSHIT METHODS
let animals = ['dogs', 'dolphins', 'whales', 'giraffe'];

const lastItem = animals.pop(); // giraffe
const firstItem = animals.shift(); // dogs
//push adds to the end
animals.push('grizzly bear');
//  unshift adds to the beginning
animals.unshift('baby hippo');  //['baby hippo', 'dogs', 'dolphins', 'whales', 'grizzly bear']
console.log('animals: ', animals);


// ****************FOR LOOPS******************
    // 3 THINGS YOU NEED TO KNOW:
        // 1. WHAT IS YOUR STARTING VALUE - 0
        // 2. WHAT IS YOUR STOPPING VALUE - SOMETHING.LENGTH
        // 3. HOW ARE YOU INCREMENTING - i++
        // Syntax: for (starting; stopping; increment) {do something here}

// console log all the animals
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}