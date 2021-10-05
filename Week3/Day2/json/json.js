const jsonData = '{"name": "John","age": 22,"gender": "male"}';

let person = JSON.parse(jsonData);

console.log(person);

const person = {
    name: "John",
    age: 22,
    gender: "male",
};

let json = JSON.stringify(person);

console.log(json);
