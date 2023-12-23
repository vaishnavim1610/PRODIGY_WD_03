console.log("Welcome to the game");

let turn = "X";
function changeTurn() {
  if (turn === "X") {
    return "O";
  } else {
    return "X";
  }
}
