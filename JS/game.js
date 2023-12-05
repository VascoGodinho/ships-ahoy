class Game {
    constructor()
    {
        this.mainPage = document.getElementById("gameIntro")
        this.gameScreen = document.getElementById("gameScreen")
        this.gameContainer = document.getElementById("gameContainer")
        this.player = null;
        this.height = 45;
        this.width = 75;
        this.obstacles = [];
        this.score = 0;
        this.lives = 3;
        this.gameIsOver = false;
    }

    start(){
        this.gameScreen.style.height = `${this.height}vw`
        this.gameScreen.style.width = `${this.width}vw`

        this.mainPage.style.display = "none";
        this.gameScreen.style.display = "block";
        this.gameContainer.style.display= "block";

        this.gameLoop();
    }

    gameLoop(){
        if (this.gameLoop === true)
        {
            return;
        }

        update();

        window.requestAnimationFrame(() => this.gameLoop());
    }

    update()
    {
        console.log("updated")
    }


}
