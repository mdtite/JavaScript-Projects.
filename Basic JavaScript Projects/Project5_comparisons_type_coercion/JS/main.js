document.write(typeof "word"); //string

document.write(typeof 3); //number

document.write("10" + 5); //result is 105 as ads string and the number

function my_function() {
    document.getElementById("test").innerHTML = 0/0; //NaN
    document.getElementById("test2").innerHTML = isNaN("this is a string"); //true
    document.getElementById("test3").innerHTML = isNaN("007"); //false
}

document.write(2E310); //infinity
document.write(-2E310); // minus infinity