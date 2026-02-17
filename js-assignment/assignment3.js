// =======================
// Q1
// =======================
console.log("Q1");
const states = [
  "Maharashtra", "Assam", "Bihar",
  "Odisha", "Uttar Pradesh",
  "Goa", "Andhra Pradesh"
];

const filteredStates = states.filter(state =>
  !["a","e","i","o","u"].includes(state[0].toLowerCase())
);

console.log(filteredStates);


// =======================
// Q2
// =======================
console.log("\nQ2");

let str = "I love my India";
let reversedSentence = str.split(" ").reverse().join(" ");

console.log(reversedSentence);


// =======================
// Q3
// =======================
console.log("\nQ3");

let string = "INDIA";
let arr = string.split("");
arr.splice(3, 0, "O", "N", "E", "S");

console.log(arr.join(""));


// =======================
// Q4
// =======================
console.log("\nQ4");

let text = "JavaScript is powerful language";
let vowels = 0;
let consonants = 0;

for (let char of text.toLowerCase()) {
  if (/[a-z]/.test(char)) {
    if ("aeiou".includes(char)) vowels++;
    else consonants++;
  }
}

console.log("Vowels:", vowels);
console.log("Consonants:", consonants);


// =======================
// Q5
// =======================
console.log("\nQ5");

function correctfn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}

console.log(correctfn("I has a pen", "has", "have"));


// =======================
// Q6
// =======================
console.log("\nQ6");

let inputArr = [1,2,3,9,10,7,5,4,3];

let greaterThanFive = inputArr.filter(num => num > 5);

console.log(greaterThanFive);


// =======================
// Q7
// =======================
console.log("\nQ7");

const students = [
  { name: "Ram", scores: [80, 70, 60] },
  { name: "Mohan", scores: [80, 70, 90] },
  { name: "Sai", scores: [60, 70, 80] },
  { name: "Hemang", scores: [90, 90, 80, 80] }
];

const averages = students.map(student => {
  const total = student.scores.reduce((sum, mark) => sum + mark, 0);
  return {
    name: student.name,
    average: total / student.scores.length
  };
});

console.log(averages);


// =======================
// Q8
// =======================
console.log("\nQ8");

function repeatedSum(num) {
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return num;
}

console.log(repeatedSum(456));


// =======================
// Q9
// =======================
console.log("\nQ9");

function countWords(paragraph) {
  return paragraph.trim().split(/\s+/).length;
}

console.log(countWords("JavaScript is very easy to learn"));


// =======================
// Q10
// =======================
console.log("\nQ10");

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello"));


// =======================
// Q11
// =======================
console.log("\nQ11");

const data = [
  {
    student1: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student2: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  },
  {
    student3: {
      subject1: 44,
      subject2: 56,
      subject3: 87,
      subject4: 97,
      subject5: 37
    }
  }
];

const result = data.map(studentObj => {
  const key = Object.keys(studentObj)[0];
  const marks = Object.values(studentObj[key]);

  const avg = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

  return {
    [key]: {
      average: avg
    }
  };
});

console.log(result);
