

//Sums all the numbers from 1 to 10
function sum1To10() {
    var sum = 0;
    for(var i = 1; i <= 10; i++){
        sum += i;
        console.log(sum);
    }

    console.log("Total: " + sum);
    
  }


//Iterates through the array Cars, and prints the name of each car.
function printCars(){
    var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
    for (var i = 0; i < cars.length; i++) {
        console.log(cars[i]);
    }
}

//Shorthand version of the printCars() method
function printCarsForOf(){
    var cars = ["BMW", "Volvo", "Mini"];

    for (var car of cars) {
        console.log(car);
    }
}