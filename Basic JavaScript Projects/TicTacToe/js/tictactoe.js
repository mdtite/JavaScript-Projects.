//Variable to keep track of whose turn it is
let activePlayer = 'X';

//Array to store moves - use this to determine win conditions
let selectedSquares = [];

//Function to place x or o in a square
function placexoro(squareNumber) {
    //checks if the square has been selected already
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //variable to hold the HTML element that was clicked
        let select = document.getElementById(squareNumber);
        //Determines the active player and places the icon
        if (activePlayer ==='X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //Adds the square number and player to the array 
        selectedSquares.push(squareNumber + activePlayer);
        //Calls the function to check for a win
        checkwinconditions();
        //Changes the active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //Function to play the placement sound
        audio('./media/place.mp3');
        //Checks if it is the computers turn 
        if (activePlayer ==='O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //Returning true is needed for the computersturn() function
        return true;
    }
    //Picks a random square for the computers turn
    function computersTurn() {
        let success = false;
        let pickAsquare;
        while (!success) {
            pickAsquare = String(Math.floor(Math.random() * 9));
            if (placexoro(pickAsquare)) {
            placexoro(pickAsquare);
            success = true;
            };
        }
    }
}