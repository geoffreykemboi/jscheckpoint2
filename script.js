// reverse a string

function reverseString(str){
  return str.split("").reverse().join("");
}
console.log(reverseString ("Hello"));


// count characters

function countCharacters(str){
  return str.length
  
}
console.log(countCharacters ("JavaScript"));


// capitalize Words


function capitalizeWords(sentence){
  return sentence

  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
  
}
console.log(capitalizeWords("hello world"));


//maximum and minimum


function findMax(arr){
  return Math.max(...arr);
}
console.log(findMax([1,5,3,9,2]));

function findMin(arr){
  return Math.min(...arr);
}
console.log(findMin([1,5,3,9,2]));


// sum of array


function sumArray(arr){
  return arr.reduce((acc, num) => acc + num, 0);
}
console.log(sumArray([1,2,3,4,5]));


// filter array


function filterEvenNumbers(arr){
  return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers([1,2,3,4,5,6]));


// factorial


function factorial(n){
  return(n === 0 || n === 1) ? 1 : n * factorial (n - 1);
}
console.log(factorial(5));


// prime number check

function isPrime(n){
  if(n < 2 )return false;
  for(let i = 2; i <= Math.sqrt(n); i++){
      if(n % i === 0)return false;
  }
  return true;
}
console.log(isPrime(11));


// Fibonacci Sequence


function fibonacci(n){
  let sequence =[0,1];
  for(let i =2; i <n; i++){
      sequence.push(sequence[i -1] + sequence[i -2]);

  }
  return sequence.slice(0,n);
}
console.log(fibonacci(7));