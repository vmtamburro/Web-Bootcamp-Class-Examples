function Greet(hour){
    if (hour < 18) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }

      console.log(greeting);
}



function GreetAdvanced(hour){
    if (hour < 18 && hour > 5) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }

      console.log(greeting);
}


function booleanLogicTests(){
    if(true || true || true || false){
        console.log("true!");
    }
    else{
        console.log("false");
    }
}


const Days = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6
}


function GetDate(){
    var day;
    switch (new Date().getDay()) {
        case Days.Sunday:
          day = "Sunday";
          break;
        case Days.Monday:
          day = "Monday";
          break;
        case Days.Tuesday:
           day = "Tuesday";
          break;
        case Days.Wednesday:
          day = "Wednesday";
          break;
        case Days.Thursday:
          day = "Thursday";
          break;
        case Days.Friday:
          day = "Friday";
          break;
        case Days.Saturday:
          day = "Saturday";
      }
    console.log(day);
}

