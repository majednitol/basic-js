// javascript basic topic  - 1.5 month
// 1.data type
// a. primitive (string, number, null, undefined, Boolean )
// b.object (array,object,function)
// 2.variable
// 3.loop(for , while , do while )
// 4.condition (if , if else , else if , switch )
// 5.ternary

console.log("majed");
console.log(23345567);
console.log();
var my_name = "majedur rahman";
console.log(my_name);
var number = 23;
console.log(number);
var name = {};
console.log(typeof name);

var name2;
console.log(name2);

var array = ["majedur rahman", "naim", 14708];
console.log(array[1]);

var obj = { majedur: 708, naim: 14721 };
var arrowObject = [
  {
    majedur: 708,
    favColour: "red",
    favMovie: "hindi",
  },
  {
    namin: 708,
    favColour: "red",
    favMovie: "hindi",
  },
  {
    majedur: 708,
    favColour: "red",
    favMovie: "hindi",
  },
];
console.log(arrowObject[0]);

function myName(number1, number2) {
  var x = number1;
  var y = number2;
  var div = x / y;
  return div;
  console.log(div);
}
var sum1 = myName(20, 30);
console.log(sum1 + 10);
var sum = 0;
for (var i = 0; i < 10; i = i + 1) {
  sum = sum + i;
}
console.log(sum);

var age = 17;
if (age === 18) {
  console.log("you are recently reached adult age");
} else if (age > 18) {
  console.log("you are adult");
} else if (age > 60) {
  console.log("you are old");
} else if (age < 18) {
  console.log("you are child");
}

var date = new Date();
var day = date.getDay();
switch (7) {
  case 0:
    console.log(" today is sunday");

    break;
  case 1:
    console.log(" today is monday");

    break;
  case 2:
    console.log(" today is thesday");

    break;
  case 3:
    console.log(" today is  wednessday");

    break;
  case 4:
    console.log(" today is thusday");

    break;

  case 5:
    console.log(" today is friday");

    break;
    case 6:
   console.log(" today is staturday");
  
   break;

  default: console.log("not a valid number")
    break;
}

var x = 5, y = 6;

var z= (x>y) ? true : false;
console.log(z)