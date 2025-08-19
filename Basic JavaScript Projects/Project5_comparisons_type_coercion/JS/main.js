document.write(typeof "word");

document.write(typeof 3);

document.write("10" + 5);

function my_function() {
    document.getElementById("test").innerHTML = 0/0;
    document.getElementById("test2").innerHTML = isNaN("this is a string");
    document.getElementById("test3").innerHTML = isNaN("007");
}