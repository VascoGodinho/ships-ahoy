window.onload = function () {
    const startButton = document.getElementById("startBtn");

    let game;


startButton.addEventListener("click", function(){
    startGame();
})

function startGame(){
    game = new Game();
    game.start();
    document.getElementById(('gameIntro').style);
}
}