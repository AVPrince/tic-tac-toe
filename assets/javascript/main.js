console.log('we made it');

let currentPlayer = 'X'; // X is the starting player.
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
];

function checkForWin(winningCombinations, playerSelections) {
    for (let i = 0; i < winningCombinations.length; i++) {
        let matchNumber = 0;
        let currentCombinations = winningCombinations[i];
        console.log(currentCombinations);
        for (let j = 0; j < currentCombinations.length; j++) {

            console.log(currentCombinations[j]);
            if (playerSelections.includes(currentCombinations[j])) {
                matchNumber = matchNumber + 1;
            }
        }

        if (matchNumber === 3){
            return true;
        }
    }

    return false;
}

// Get all .grid-cell elements from the DOM and store in cellElementArray (see Resources links below):
// Loop over each element in our cellElementArray:
    // Set the cell element at cellElementArray[cellIndex] to the currentCell variable:
        // Add an event listener to the currentCellElement:
         // event.target tells us which element the user clicked (see Resources links below):
        // Log the ID of the cell which was just clicked:
const cellElementArray = document.querySelectorAll('.grid-cell');

for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {

    const currentCellElement = cellElementArray[elementIndex]

    currentCellElement.addEventListener('click', function (event) {

        const clickedCellElement = event.target;

        // console.log("You clicked on cell number: " + clickedCellElement.id)
        if (currentPlayer === 'X') {
            clickedCellElement.innerHTML = 'X';
            playerXSelections.push(Number(clickedCellElement.id));
            let result = checkForWin(winningCombinations, playerXSelections);
            if (result === true) {
                console.log('Player X Wins');
            }
            currentPlayer = 'O';
        } else{
            clickedCellElement.innerHTML = 'O';
            playerOSelections.push(Number(clickedCellElement.id));
            let result = checkForWin(winningCombinations, playerOSelections);
            if (result === true) {
                console.log("Player O Wins");
            }
            currentPlayer = 'X';
        }

        // console.log('X Plays', playerXSelections);
        // console.log('O Plays', playerOSelections);
    });
}








// function checkForWin(winningCombinations, playerSelections) {
//     for (let i=0; i < winningCombinations.length; i++) {
//         // let winningCombinations = winningCombinations[i];
//         console.log(winningCombinations[i]);

//         for (let j = 0; j < winningCombinations[i].length; j++){
//             console.log(winningCombinations[i][j]);

//         }
//     }
// }


// define a function named checkForWin which accepts two arrays as arguments: winningCombination and playerSelections
//     for every winning combination array in winningCombination
//         create a matches variable to keep track of the number of matches we find in playerSelections
//         for every number in the current combination array
//             if the playerSelections array contains the current number, increment matches by 1
//             if matches is **equal** to 3, we found a win, so return true (which will stop the loop and exit the function)
//     if we got through all combinations without returning true, then return false because no win was found