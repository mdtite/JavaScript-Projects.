function addition_Function () {
    var addition = 2+2; //creating var
    document.getElementById("Math").innerHTML = "Addition 2 + 2 = " + addition //addition
}

function subtraction_Function () {
    var subtraction = 5-2; //creating var
    document.getElementById("Math2").innerHTML = "Subtraction 5 + 2 = " + subtraction //subtraction
}

function mult_Function () {
    var mult = 6*8; //creating var
    document.getElementById("Math3").innerHTML = "Subtraction 6 * 8 = " + mult //multiply
}

function division_Function () {
    var division = 48/6; //creating var
    document.getElementById("Math4").innerHTML = "Division 48 / 6 = " + division //division
}

function multiple_Function () {
    var multiple = (1+2)*10/2-5; //creating var
    document.getElementById("Math5").innerHTML = "1 plus 2, multiplied by 10, divided in half then subtracted by 5 = " + multiple //multiple actions
}

function modulus_Function () {
    var modulus = 25%6; //creating var
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have remainder of: " + modulus //modulus
}

function unary_Function () {
    var unary = 10; //creating var
    document.getElementById("Math7").innerHTML = "The opposite number of 10 is: " + -unary //unary or the opposite value
}

var x = 5;
x++;
document.write("increment " + x); //increment

var x = 5.25;
x--;
document.write(" decrement " + x); // decrement

window.alert(Math.random() * 100); //random no between 0-100