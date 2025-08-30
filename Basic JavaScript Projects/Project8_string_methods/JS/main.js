// concat

function full() {
    var a = "i have ";
    var b = "two ";
    var c = "apples.";
    var x = a.concat(b,c);
    document.getElementById("conca").innerHTML = x;
}

// slice and to upper case and search

function sliceF() {
    var sentance = "All work and no play makes Johnny a dull student."
    var section = sentance.slice(27,33);
    var bigLetter = sentance.toUpperCase();
    var position = sentance.search("work");
    document.getElementById("slice").innerHTML = section;
    document.getElementById("upperC").innerHTML = bigLetter;
    document.getElementById("poss").innerHTML = position;
}

// to string and precision and tofixed and valueof

function stringM() {
    var x = 182;
    var y = 123843.43254312331;
    var a = 2.56
    var b = "hello world!";
    document.getElementById("notos").innerHTML = x.toString();
    document.getElementById("precision").innerHTML = y.toPrecision(7);
    document.getElementById("fixed").innerHTML = a.toFixed();
    document.getElementById("value").innerHTML = b.valueOf();
}