let form = document.getElementById("signup");
let name = form.elements["first_name"];
const email = form.elements["email"];

// form.addEventListener("submit", (event) => {
//     console.log(name.value);
//     event.preventDefault();
// });

const requiredFields = [
    { input: name, message: "Name is required" },
    { input: email, message: "Email is required" },
];

function error(input, message) {
    input.className = "error";
    // show the error message
    const error = input.previousElementSibling.previousElementSibling;
    error.className = "error";
    error.innerText = message;
    return false;
}

function success(input) {
    input.className = "success";
    // hide the error message
    const error = input.previousElementSibling.previousElementSibling;
    error.innerText = "";
    return true;
}

function requireValue(input, message) {
    return input.value.trim() === "" ? error(input, message) : success(input);
}

form.addEventListener("submit", (event) => {
    // check required fields
    let valid = true;
    debugger;
    requiredFields.forEach((input) => {
        valid = requireValue(input.input, input.message);
    });
    // validate email
    // stop submitting the form if the data is invalid
    if (!valid) {
        event.preventDefault();
    }
});
