//Problem 1
const perf = require("execution-time")();
const addToZero = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let i1 = 0; i1 < nums.length; i1++) {
      if (nums[i] + nums[i1] === 0) {
        return true;
      }
    }
  }
  return false;
};

//I expect the runtime to be quick with smaller arrays, but it it got quper large it will slow down look over every index for each number.

perf.start();
const result = addToZero([1, 2, 3]);
let problemOne = perf.stop();

console.log(result, problemOne.preciseWords);

//Problem 2
const hasUniqueChars = (str) => {
  let lowerCaseStr = str.toLowerCase();
  let strArr = lowerCaseStr.split("");

  strArr.sort();

  for (let i = 0; i < strArr.length - 1; i++) {
    if (strArr[i] != strArr[i + 1]) continue;
    else return false;
  }
  return true;
};

// I took a different, more scalable approach to this method by sorting them and comparing their character value. I expect this be quick with short words and better with a large strings of charecters

perf.start();
const result2 = hasUniqueChars("MmoOnday");
let problemTwo = perf.stop();

console.log(result2, problemTwo.preciseWords);

//Problem 3
const isPangram = (string) => {
  let strArr = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
};

// This will always be pretty quick, but if you enter in a massive body of text it may begin to slow. But once you have 3000+ chareceters, not to put it too plainly but why check? Its gonna be a pangram lol

perf.start();
const result3 = isPangram("The quick brown fox jumps over the lazy dog.");
let problemThree = perf.stop();

console.log(result3, problemThree.preciseWords);

//Problem 4
const findLongestWord = (sentenceArr) => {
  const lengths = sentenceArr.map((string) => {
    return string.length;
  });
  return Math.max(...lengths);
};

//This one will also be quick until you get an array with a length in the thousands.

perf.start();
const result4 = findLongestWord([
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "kiwi",
  "lemon",
  "mango",
  "orange",
  "peach",
]);
let problemFour = perf.stop();

console.log(result4, problemFour.preciseWords);

//.txt file with notes and runtimes included in project file (runtime-analysis-notes.txt).
