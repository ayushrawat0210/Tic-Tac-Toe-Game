let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_button");
let newBtn = document.querySelector("#new_game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.setAttribute("disabled", true);

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.removeAttribute("disabled");
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulations , winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val == pos2Val && pos2Val == pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
