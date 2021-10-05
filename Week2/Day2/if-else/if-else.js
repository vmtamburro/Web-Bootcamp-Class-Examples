//===============================
// BASIC
//===============================

function testNum(a) {
    let result;
    if (a > 0) {
        result = "positive";
    } else {
        result = "NOT positive";
    }
    return result;
}

console.log(testNum(-5));

//===============================
// AND / OR OPERATOR
//===============================

// This is good, but doesn't handle when you don't pass a number

function isPositiveNumber(number) {
    if (number > 0) {
        return true;
    }
    return false;
}

console.log(isPositiveNumber("1"));

function isPositiveNumberBelow10(number) {
    if (number > 0 && number < 10) {
        return true;
    }
    return false;
}

console.log(isPositiveNumberBelow10(9));

function isPositiveNumberBetween0_10And20_30(number) {
    if ((number > 0 && number < 10) || (number > 20 && number < 30)) {
        return true;
    }
    return false;
}

console.log(isPositiveNumberBetween0_10And20_30(21));

//===============================
// Neat use of OR
//===============================

function printFruit(fruit) {
    console.log(fruit || "apple");
}

printFruit();
printFruit("orange");
