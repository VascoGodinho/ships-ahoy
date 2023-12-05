class Game {
  constructor() {
    this.mainPage = document.getElementById("gameIntro");
    this.gameScreen = document.getElementById("gameScreen");

    this.player = null;
    this.obstacles = [];
    this.score = 0;
    this.life = 3;
    this.gameIsOver = false;
    this.healthDOM = document.getElementById("lives");
    this.scoreDOM = document.getElementById("score");
  }

  start() {
    this.mainPage.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameLoop();
  }

  gameLoop() {
    if (this.gameLoop === true) {
      return;
    }
    /* this.mouseAim = new MouseAim(); // Nao funciona */
    this.update();

    const animation = window.requestAnimationFrame(() => this.gameLoop());
    this.spawnBoats(animation);
  }

  update() {
    const obstTokeep = [];
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
      if (obstacle.move()) {
        setTimeout(() => {
          this.life -= 1;
          console.log(this.life);
          this.healthDOM.innerText = this.life;
          obstacle.element.remove();
          console.log(obstacle);
        }, 2000);
      } else {
        obstTokeep.push(obstacle);
      }
    });
    this.obstacles = obstTokeep;
  }

  spawnBoats(animation) {
    if (animation % 200 === 0) {
      this.obstacles.push(new Enemy(this.gameScreen));
      console.log(this.obstacles);
    }
  }
}
