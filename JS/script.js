window.onload = function () {
  const startButton = document.getElementById("startBtn");
  const restartButton = document.getElementById("restartBtn");

  let game;

  startButton.addEventListener("click", function () {
    startGame();
  });

  restartButton.addEventListener("click", function () {
    menu();
  });

  function startGame() {
    game = new Game();
    game.start();
    document.getElementById("gameIntro").style.display = "none";
  }

  function menu() {
    location.reload();
  }
};
