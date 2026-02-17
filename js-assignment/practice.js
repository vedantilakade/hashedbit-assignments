console.log("JS Practice 1 - Delta");
console.log("---------------------------");

/* 1. let, const, var difference */
function scopeExample() {
    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
        var a = 40; 
        let b = 50;
        const c = 60;

        console.log("Inside Block:");
        console.log("var:", a);
        console.log("let:", b);
        console.log("const:", c);
    }

    console.log("Outside Block:");
    console.log("var:", a);
    console.log("let:", b);
    console.log("const:", c);
}

scopeExample();
console.log("---------------------------");


/* 2. Return second fruit */
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

function getSecondFruit(arr) {
    return arr[1];
}

console.log("Second Fruit:", getSecondFruit(fruits));
console.log("---------------------------");


/* 3. Push and Pop */
function modifyArray(arr) {
    arr.push("New Item");
    arr.pop();
    return arr;
}

console.log("Modified Array:", modifyArray([1, 2, 3]));
console.log("---------------------------");


/* 4. Square using map */
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}

console.log("Squared Numbers:", squareNumbers(numbers));
console.log("---------------------------");


/* 5. Filter odd numbers */
const nums = [1, 2, 3, 4, 5, 6];

function getOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

console.log("Odd Numbers:", getOddNumbers(nums));
console.log("---------------------------");


/* 6. Greeting Object */
const person = {
    name: "Vedanti",
    age: 22,
    occupation: "Student"
};

function greet(p) {
    return `Hello, my name is ${p.name}. I am ${p.age} years old and I am a ${p.occupation}.`;
}

console.log("Greeting:", greet(person));
console.log("---------------------------");


/* 7. Area of rectangle */
function areaRectangle(obj) {
    return obj.width * obj.height;
}

console.log("Rectangle Area:", areaRectangle({ width: 10, height: 5 }));
console.log("---------------------------");


/* 8. Object Keys */
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
};

function getKeys(obj) {
    return Object.keys(obj);
}

console.log("Object Keys:", getKeys(car));
console.log("---------------------------");


/* 9. Merge Objects */
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

console.log("Merged Object:", mergeObjects({ a: 1 }, { b: 2 }));
console.log("---------------------------");


/* 10. Sum using reduce */
const arr = [10, 20, 30, 40];

function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum of Array:", sumArray(arr));
console.log("---------------------------");
