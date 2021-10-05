// ==============================
// LOG
// ==============================

// SINGLE OBJECT

var someObject = { str: "Some text", id: 5 };
console.log(someObject);

// MULTIPLE OBJECTS

var car = "Dodge Charger";
var someObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", someObject);

// STYLING

console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");

// GROUPS

console.log("This is the outer level");
console.group("First group");
console.log("In the first group");
console.group("Second group");
console.log("In the second group");
console.warn("Still in the second group");
console.groupEnd();
console.log("Back to the first group");
console.groupEnd();
console.debug("Back to the outer level");

// TRACE

function foo() {
    function bar() {
        console.trace();
    }
    bar();
}

foo();

// DEBUGGER

function doSomething() {
    let x = 1;
    let y = 2;
    debugger;
    return x + y;
}
