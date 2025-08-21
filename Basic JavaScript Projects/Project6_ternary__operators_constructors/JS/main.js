function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "you are too short":"you are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride!";
}

function age_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age <= 18) ? "you are too young":"you are old enough";
    document.getElementById("agev").innerHTML = can_vote + " to vote!";
}

function vehicle(make, model, year, color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}

var Jack = new vehicle("dodge", "viper", "2020", "red")
var Emily = new vehicle("jeep", "hawk", "2019", "black")
var Mark = new vehicle("ford", "focus", "1971", "gold")

function my_function() {
    document.getElementById("keywords_and_constructors").innerHTML = 
    "Mark drives a " + Mark.vehicle_color + "-colored " + Mark.vehicle_model + " manufactured in " + Mark.vehicle_year;
}