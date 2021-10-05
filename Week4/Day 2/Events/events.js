function sayHello() {
    console.log("Hello World");
}

function over() {
    console.log("Mouse Over");
}
function out() {
    console.log("Mouse Out");
}

/*
In this code, we store a reference to the button inside a constant called btn, using the Document.querySelector() function. 
We also define a function that returns a random number. The third part of the code is the event handler. 
The btn constant points to a <button> element, and this type of object has a number of events that can fire on it, and therefore, event handlers available. 
We are listening for the click event firing, by setting the onclick event handler property to equal an anonymous function 
containing code that generates a random RGB color and sets the <body> background-color equal to it.

This code is run whenever the click event fires on the <button> element, that is, whenever a user selects it.
*/

// const btn = document.querySelector("button");

// function random(number) {
//     return Math.floor(Math.random() * (number + 1));
// }

// btn.onclick = function () {
//     const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//     document.body.style.backgroundColor = rndCol;
// };

/*
Sometimes inside an event handler function, you'll see a parameter specified with a name such as event, evt, or simply e. 
This is called the event object, and it is automatically passed to event handlers to provide extra features and information. 
For example, let's rewrite our random color example again slightly:

Here you can see we are including an event object, e, in the function, and in the function setting a background color style 
on e.target — which is the button itself. The target property of the event object is always a reference to the element the event occurred upon. 
So, in this example, we are setting a random background color on the button, not the page.

*/

// function bgChange(e) {
//     const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//     e.target.style.backgroundColor = rndCol;
//     console.log(e);
// }

// btn.addEventListener("click", bgChange);

/*
e.target is incredibly useful when you want to set the same event handler on multiple elements and do something to all of them when an event occurs on them. 
You might, for example, have a set of 16 tiles that disappear when selected. 
*/

// for (let i = 1; i <= 16; i++) {
//     const myDiv = document.createElement("div");
//     document.body.appendChild(myDiv);
// }

// function random(number) {
//     return Math.floor(Math.random() * number);
// }

// function bgChange() {
//     const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
//     return rndCol;
// }

// const divs = document.querySelectorAll("div");

// for (let i = 0; i < divs.length; i++) {
//     divs[i].onclick = function (e) {
//         e.target.style.backgroundColor = bgChange();
//     };
// }

/*
Sometimes, you'll come across a situation where you want to prevent an event from doing what it does by default. 
The most common example is that of a web form, for example, a custom registration form. When you fill in the details and select the submit button, 
the natural behavior is for the data to be submitted to a specified page on the server for processing, and the browser to be redirected to a 
"success message" page of some kind (or the same page, if another is not specified.)

The trouble comes when the user has not submitted the data correctly — as a developer, you want to prevent the submission to the server and 
give an error message saying what's wrong and what needs to be done to put things right. Some browsers support automatic form data validation 
features, but since many don't, you are advised to not rely on those and implement your own validation checks. Let's look at a simple example.

*/

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.onsubmit = function (e) {
    if (fname.value === "" || lname.value === "") {
        e.preventDefault();
        para.textContent = "You need to fill in both names!";
    }
};
