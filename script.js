console.log("Welcome to the game");

let turn = "✖️";
let audioTurn = new Audio("sounds/clicked.mp3");
let gameOver = false;

function changeTurn() {
  if (turn === "✖️") {
    return "⭕";
  } else {
    return "✖️";
  }
}
//function to check win
let checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");

  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector("h1").innerText =
        "🎉" + boxtext[e[0]].innerText + " Won 🎉";
      document.querySelector(".turn").innerText = " ";
      gameOver = true;
      document
        .querySelector(".gif")
        .getElementsByTagName("img")[0].style.visibility = "visible";
    }
  });
};

//Main Game

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    document.querySelector("h1").innerText = "";
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!gameOver) {
        document.getElementsByClassName("turn")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "✖️";
  gameOver = false;
  document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
  document.querySelector("h1").innerText = "Let's play again🎉";
  document
    .querySelector(".gif")
    .getElementsByTagName("img")[0].style.visibility = "hidden";
});
