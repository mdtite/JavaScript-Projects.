//while loop

function Call_Loop() {
    var a ="";
    var b = 1;
while (b < 4) {
  a += "<br>" + b;
  b++;
}
var text = "Hello World!";
var length = text.length;
document.getElementById("Loop").innerHTML = a + "<br>" + length;
}

//text length
var text = "Hello World!";
var length = text.length;

//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop () {
for (Y = 0; Y < Instruments.length; Y++) {
Content += Instruments[Y] + "<br>";
}
document.getElementById("List_of_Instruments"). innerHTML = Content;
}

//array objects
function cat_pics() { 
  var Cat_Picture = [];
  Cat_Picture[0] = "sleeping";
  Cat_Picture[1] = "playing";
  Cat_Picture[2] = "eating";
  Cat_Picture[3] = "purring";
  document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

//conastant
function constant_function() {
const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
Musical_Instrument.color = "blue";
Musical_Instrument.price = "$900";
document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//let and var
var X = 82;
document.write(X);
{
let X = 33;
document.write("<br>" + X);
}
document.write ("<br>" + X);

//Return -- Call a function that returns the value of PI
function myFunction() {
  return Math.PI;
}


// Return plus This
let car = {
make: "Dodge ",
model: "Viper ", 
year: "2021 ", 
color: "red ",
description: function()  { return "The car is a " + this.year + this.color + this.make + this.model;
  }
};
document.getElementById("Car_Object").innerHTML = car.description();

// Break loop when number is 3
for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

//Continue
let text = "";
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += i;
}
console.log(text);