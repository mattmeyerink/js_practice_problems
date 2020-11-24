// Javascript Conditionals and Loops Answers
// Question 1
function findLarger(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } 
    return num2;
}

// Question 2
function sortThree(num1, num2, num3) {
    var arr = [num1, num2, num3];
    arr.sort(function(a,b){return a-b});
    alert(arr);
}

// Question 3
function largestOfFive(num1, num2, num3, num4, num5) {
    var arr = [num1, num2, num3, num4, num5];
    var max = num1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    alert(max)
}

// Question 4
function writeEvenOdd() {
    for (let i = 0; i <= 15; i++) {
        if (i == 0) {
            document.write("Its zero\n\n");
        } else if (i % 2 == 0) {
            document.write("Even\n\n");
        } else {
            document.write("Odd\n\n");
        }
    }
}

// Question 5
function fizzBuzz(){
    for (let i = 1; i <= 100; i++){
        if (i % 5 == 0 && i % 3 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0) {
            console.log("Buzz");
        }
    }
}

// Question 6
function remainderCounter() {
    let counter = 0;
    for (let i = 1; i <= 1000; i++) {
        if (i % 3 == 0) {
            counter++;
        }
    }
    return counter;
}

// Question 7
function halfPyramid() {
    let n = 5;
    for (let i = 1; i <= 5; i++) {
        lineOutput = ""
        spaces = n - i;
        for (let j = 1; j <= spaces; j++) {
            lineOutput += " ";
        }
        for (let j = 1; j <= i; j++) {
            lineOutput += j;
        }
        for (let j = i - 1; j > 0; j--) {
            lineOutput += j;
        }
        console.log(lineOutput)
    }
}

// Question 8
function fullPyramid(){
    let n = 5;
    for (let i = 1; i <= 5; i++) {
        lineOutput = ""
        spaces = n - i;
        for (let j = 1; j <= spaces; j++) {
            lineOutput += " ";
        }
        for (let j = 1; j <= i; j++) {
            lineOutput += j;
        }
        for (let j = i - 1; j > 0; j--) {
            lineOutput += j;
        }
        console.log(lineOutput)
    }
    for (let i = n - 1; i > 0; i--) {
        lineOutput = ""
        spaces = n - i;
        for (let j = 1; j <= spaces; j++) {
            lineOutput += " ";
        }
        for (let j = 1; j <= i; j++) {
            lineOutput += j;
        }
        for (let j = i - 1; j > 0; j--) {
            lineOutput += j;
        }
        console.log(lineOutput)
    }
}