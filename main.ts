

// Array of Filter method

// First Example 

let num = [23, 45, 56, 54, 43, 32, 56, 89, 55, 11];

// filter even number..
let evenNumber = num.filter((elem) => {
    return elem % 2 !== 0;
})

console.log(evenNumber);


// Second Example

let people = [
    {name: "Muhammad Shakeel", age: 27},
    {name: "Muhammad Saqib", age: 23},
    {name: "Muhammad Zubair", age: 20},
]

let arrOfObj = people.filter((person) => {
    return person.age < 28
})

console.log(arrOfObj);


// Array of Find Method 

// First Example

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// first even number
let onlyOneEvenNumber = numbers.find((num) => {
    return num % 2 === 0
}
);

console.log(onlyOneEvenNumber);


// Second Example

let people = [
    { name: "Muhammad Imran", age: 40 },
    { name: "Umer Daraz", age: 25 },
    { name: "Muhammad Jabbar", age: 20 },
];

// the person with age 25
let personWithAge25 = people.find((person) => person.age === 25);

console.log(personWithAge25);


// Array of Reduce method

// First Example

let num = [1, 2, 3, 4, 5, 6, 7, 8];

// Using reduce to calculate the sum of numbers
let sum = num.reduce((accumulator, currentNumber, index) => {
    console.log(`${index} index ${accumulator} + ${currentNumber}`);
    return accumulator + currentNumber
})

console.log(sum);


// Second Example

let words = ["Hello", " ", "World", "!"];

// Using reduce to concatenate strings
let concatString = words.reduce((accumulator, currentWord) => {
    console.log(`${accumulator} + ${currentWord}`);
    return accumulator + currentWord
});

console.log(concatString); 
