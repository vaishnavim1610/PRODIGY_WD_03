console.log("Welcome to the game");

let turn = "X";
let audioTurn = new Audio("sounds/clicked.mp3");

function changeTurn() {
  if (turn === "X") {
    return "O";
  } else {
    return "X";
  }
}

function checkWin() {}

//Main Game

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      // audioTurn.play();
      document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
    }
  });
});
