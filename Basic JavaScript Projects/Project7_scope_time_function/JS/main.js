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

//if else statement

function get_date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("greeting").innerHTML = "It's a bit late no?";
    }
}

function age_function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        vote = "you can vote";
    } else {
        vote = "you can't vote";
    }
    document.getElementById("how_old").innerHTML = vote;
}

// else if statement

function time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "it is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "it is afternoon.";
    } else {
        Reply = "it is evening time."
    }
    document.getElementById("time_day").innerHTML = Reply;
}
