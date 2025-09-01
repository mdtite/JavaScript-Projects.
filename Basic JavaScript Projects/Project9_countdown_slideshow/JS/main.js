function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); //the program is pausing for 1,000 milliseconds
        if (seconds == -1) {
            alert("time is up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}