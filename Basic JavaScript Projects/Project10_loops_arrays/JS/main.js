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

var text = "Hello World!";
var length = text.length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop () {
for (Y = 0; Y < Instruments.length; Y++) {
Content += Instruments[Y] + "<br>";
}
document.getElementById("List_of_Instruments"). innerHTML = Content;
}