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

document.write(6>4); //true boolean
document.write(4<1); //false boolean

console.log(2+2); //4
console.log(2<3); //true
console.log(2>9); //false

console.log(2==1+1); //compare true
console.log(2==2+1); //comapre false

x = 10;
y = 10;
z = "10"

a = "marius"
b = "marius"

console.log(x===y, x===z, a===b); // compare the type and value wiht ===