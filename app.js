let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.restbtn');
let newBtn = document.querySelector('.new-game-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');

let turnO = true;

alert("Welcome to Tic Tac Toe! Player O starts first.");
let player1 = prompt("Enter Player 1 Name (O):");
let player2 = prompt("Enter Player 2 Name (X):");

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        if (turnO) {
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            showWinner(val1);
            disableBoxes();
            return; // 🔥 stop loop
        }
    }
};

const showWinner = (winner) => {
    let winnerName = winner === "O" ? player1 : player2;
    msg.innerText = `Winner is ${winnerName}`; // ✅ name show hoga
    msgContainer.classList.remove("hide");
};

const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

const resetGame = () => {
    turnO = true;
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("x", "o");
    });
    msgContainer.classList.add("hide");
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);