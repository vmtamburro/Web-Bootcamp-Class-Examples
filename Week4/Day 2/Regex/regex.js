var regex = /^\d{2}$/;

// ^ indicates the beginning of a string
// \d indicates a digit
// followed by 2 meaning 2 consecutive digits
// $ indicated the end of the string

// This will attempt to find 2 consecutive digits in a string

var str1 = "29";
console.log(regex.test(str1)); // => true
var str2 = "3g8";
console.log(regex.test(str2)); // => false

// ===========================
// SEARCHING
// ===========================

//looks for any lowercase character followed by a digit

var str = "James Bond007";
var regex = /[a-z][0-9]+/;
console.log(str.search(regex)); // => 9. the position of 'd'

// ===========================
// STRING REPLACE
// ===========================

// removes any digits
var str = "James Bond007";
var regex = /[\d]/g;
console.log(str.replace(regex, "")); // => James Bond

// ===========================
// STRING MATCH
// ===========================

// The method match() tests whether a string matches a regular expression or extracts specific parts of a string.
// If nothing is found it returns null, else it returns an array of all matches

var regExp = /\d+/g;
var str = "Mary: 36, Tim: 38";
console.log(str.match(regExp)); // => [36,38]

// ===========================
// SPLIT STRING
// ===========================

var regex = /[,:.]/; // delimiters are comma, colon, and period
var str = "Tim:20,Henry:30.Linda:35";
console.log(str.split(regex)); // => [Tim,20,Henry,30,Linda,35]
