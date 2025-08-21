// global variable
var x = 10;
function addNumbers() {
    document.write(10+x+"<br>");
}
function addNumbers2() {
    document.write(x+100+"<br>");
}
addNumbers();
addNumbers2();

// local variable

function deductNumbers() {
    var y = 10;
    console.log(15 - y);
    document.write(15 - y);
}
function deductNumbers2() {
    console.log(200 - y); //y is undefined here
    document.write(200-y);
}

deductNumbers();
deductNumbers2();