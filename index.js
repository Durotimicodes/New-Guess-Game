let strin = "abcde";
// let the letters appear in reverse case i.e edcba;
// let result = " ";
// function reverseLetter(strin) {
//   for (let i = strin.length - 1; i >= 0; i--) {
//     result += strin[i];
//   }
//   return result;
// }
// console.log(reverseLetter(strin));

// strin.split("");

// let arr = [1, 2, 3, 4, 5];

// console.log(arr);

// arr.split("").reverse().join();

// GIVEN A SENTENCE, RETURN THE CHARACTER THAT OCCURED THE HIGHEST NUMBER OF TIMES

let word = "I want to eat";
function highestCharacter(string) {
  const store = {};

  for (let char of string) {
    let key = char.toLowerCase().trim();

    if (key === "") continue;
    if (store[key]) {
      store[key]++;
    } else {
      store[key] = 1;
    }
  }
  const values = Object.values(store);
  const maxValue = Math.max(...values);

  const keys = Object.keys(store);
  for (let key of keys) {
    if (store[key] === maxValue) {
      return key;
    }
  }
}

console.log(highestCharacter("I want to eat"));

// GIVEN A STRING, CHECK TO SEE IF ITS A PALINDROME, IF IT IS RETURN TRUE ELSE RETURN FALSE
let str = "madam";

function reverseString(str) {
  let splitString = str.split("");
  let normSpring = splitString.join("");
  let reverseArray = splitString.reverse();
  let joinString = reverseArray.join("");

  if (normSpring === joinString) {
    console.log(true);
  } else {
    console.log(false);
  }
}

reverseString(str);

//GIVEN A VALUE N, CALCULATE THE FACTORIAL OF N. E.g 4 factorial = 4*3*2*1

let n = a * b * c * d;
Num = 5;
let result = [];

function factorialNum(Num) {
  for (let i = 1; i < 5; i++) {
    result += [i];

    let splitResult = result.split("");
    console.log(splitResult);

    let factResult = result;
  }
  return result;
}

console.log(factorialNum(Num));

function factorial(num) {
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }
}

factorial(8);

// // reverse the STRING "I AM A FULL STACK DEVELOPER";

var arrString = "";
function reverseStr(str) {
  for (i = str.length - 1; i >= 0; i--) {
    arrString += str[i];
  }
  return arrString;
}

console.log(reverseStr("I AM A FULL STACK DEVELOPER"));

// find the median
function findMedian(arr) {
  let truckNum = arr.sort();
  let midNum = Math.floor(arr.length / 2);

  for (let i = 0; i < arr.length; i++) {
    if (arr.length % 2 !== 0) {
      return midNum;
    } else return (truckNum[midNum - 1] + truckNum[midNum]) / 2;
  }
}

// console.log(findMedian([5, 3, 4, 6, 2, 1]));

// function findRepeatedNum(strArr) {
//   let result = "";
//   let splitArr = strArr.split(" ");
//   let count = (count[splitArr] || 0) + 1;
//   result += count;

//   return result;
// }

// console.log(findRepeatedNum(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// console.log(f);

const hege = ["Rotimi", "Seun"];
const stale = ["Emil", "Ben", "Ting"];
const child = hege.concat(stale);

console.log(child);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let newFruit = fruits.fill("Grape", 1, 3);
console.log(newFruit);

for (let x of fun) {
  document.getElementById("demo").innerHTML += x + "<br>";
}

console.log(fun);

 select the numbers divisible by 2 and print value into an array

const age = [3, 10, 18, 25];
let checker = age.findIndex(checkDivByTwo);
console.log(checker);

function checkDivByTwo(age) {
  return age > 18;
}
console.log(checkDivByTwo());

let includeCheck = fruits.includes("Watermelon");
console.log(includeCheck);

console.log(fruits.indexOf("Grape"));
console.log(Array.isArray(age));
console.log(fruits.join());

console.log(fruits.lastIndexOf("Mango"));

let num = [4, 9, 16, 25];
let newArray = num.map(Math.sqrt);
console.log(newArray);
console.log(newArray.indexOf(3));

change to uppercase

Array.prototype.myUcase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

const fruit = ["Banana", "Grape", "Pineapple", "Blueberry"];
console.log(fruit.myUcase());

function FindIntersection(strArr) {
code goes here
let strArr = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
let elem1 = strArr[0].split(",");
let elem2 = strArr[1].split(",");
console.log(elem1, elem2);
let result = [];

for (let i = 0; i < elem1.length; i++) {
  if (elem2.includes(elem1[i])) {
    console.log((result += elem1[i]));
  }
}

  let result = [];
  for (let i = 0; i < elem1.length; i++) {
    if (elem1[i].includes(elem2)) {
      return (result += elem1[i]);
    }
  }
}
// // keep this function call here
// console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
// let sentence = "The name of my school is Tentouch";
// function highestChar(sentence) {
//   const store = {};

//   for (let char of sentence) {
//     let key = char.toLowerCase();
//     if (key === " ") continue;
//     if (store[key]) {
//       store[key]++;
//     } else {
//       store[key] = 1;
//     }
//   }
//   console.log(store);
//   const value = Object.values(store);

//   const highestVal = Math.max(...value);
//   console.log(highestVal);

//   const keys = Object.keys(store);

//   for (let key of keys) {
//     if (store[key] === highestVal) {
//       return key;
//     }
//   }
// }
// console.log(highestChar("The name of my school is Tentouch"));

function vowelCount(str) {
  const vowels = "aeiou";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(vowelCount("The refrigerator is cold"));

// square of Numbers
function squareNum(num) {
  let str = num.toString();
  let result = [];

  for (let i = 0; i < str.length; i++) {
    const num = Math.pow(Number(str[i]), 2);
    result.push(num);
  }

  return Number(result.join(""));
}
console.log(squareNum(9119));

// // question

// accum('abcd') -> 'A-Bb-Ccc-Dddd'
//
// accum('cwAt') -> "C-Ww-Aaa-Tttt"

function accum(str) {
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    const cap = str[i].toUpperCase();
    const repeat = str[i].repeat(i).toLowerCase();
    const letter = cap + repeat;

    newArr.push[letter];

    // newArr.push(str[i].toUpperCase() + str[i].toLowerCase().repeat(i))
  }

  return newArr.join("-");
}
console.log(accum("abcd"));

// accum('RqaEzty') -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

function accumulation(string) {
  const arr = [];

  for (let i = 0; i < string.length; i++) {
    const capLetter = string[i].toUpperCase();
    const smallLetter = string[i].toLowerCase().repeat(i);
    const result = capLetter + smallLetter;

    arr.push(result);
    // arr.push(string[i].toUpperCase() + string[i].toLowerCase().repeat(i));
  }
  return arr.join("-");
}

console.log(accumulation("RqaEzty"));

function isDivisibleByN(arr, n) {
  let result = [];
  const reminder = 1;

  for (let i = 0; i < arr.length; i++) {
    let checkerTwo = arr[i] % n;

    if (checkerTwo < reminder && !result.includes(arr[i]) && arr[i] !== 0) {
      result.push(arr[i]);
    }
    if (result.length === 0) {
      return 0;
    }
  }
  return result;
}
console.log(isDivisibleByN([1, 5, 1, 7], 4));

let value = [{ val: 3 }, { val: 4 }, { val: 5 }];

function increment(arr, value) {
  let result = [];
  let ArrOne = value[0].val;
  let ArrTwo = value[1].val;
  let ArrThree = value[2].val;

  for (let i = 0; i < arr.length; i++) {
    result.push(
      { val: ArrOne + value },
      { val: ArrTwo + value },
      { val: Three + value }
    );
  }
  return result;
}
console.log(increment([{ val: 3 }, { val: 4 }, { val: 5 }]));
