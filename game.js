const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", starGame);

function starGame() {
  let canvasSize;

  if (window.innerHeight > window.innerWidth) {
    canvasSize = window.innerWidth * 0.8;
  } else {
    canvasSize = window.innerHeight * 0.8;
  }
  canvas.setAttribute("width", canvasSize);
  canvas.setAttribute("height", canvasSize);

  const elementSize = canvasSize / 10;

  console.log({ canvasSize, elementSize });

  game.font = elementSize + "px Verdana";
  game.textAlign = "end";

  for (let i = 1; i <= 10; i++) {
    game.fillText(emojis["X"], elementSize * i, elementSize);
  }
  //   game.fillRect(0, 50, 100, 100);
  //   game.clearRect(0, 0, 100, 50);
}
