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