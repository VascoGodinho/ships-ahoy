class Game {
  constructor() {
    this.mainPage = document.getElementById("gameIntro");
    this.gameScreen = document.getElementById("gameScreen");
    this.gameOverScreen = document.getElementById("gameOver");

    this.obstacles = [];
    this.birds = [];
    this.score = 0;
    this.life = 3;
    this.gameIsOver = false;
    this.healthDOM = document.getElementById("lives");
    this.scoreDOM = document.getElementById("score");
  }

  start() {
    this.obstacles = [];
    this.score = 0;
    this.life = 3;
    this.gameIsOver = false;
    this.healthDOM.innerText = this.life;
    this.scoreDOM.innerText = this.score;

    this.mainPage.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameLoop();
  }

  gameLoop() {
    if (this.gameLoop === true) {
      return;
    }

    this.update();

    const animation = window.requestAnimationFrame(() => this.gameLoop());
    this.spawnBoats(animation);
    if (this.life === 0) {
      this.gameOver();
    }
  }

  gameOver() {
    this.gameScreen.style.display = "none";
    this.gameOverScreen.style.display = "block";

    document.getElementById("gameOverScore").innerText = this.score;
  }

  update() {
    const obstTokeep = [];
    this.obstacles.forEach((obstacle) => {
      obstacle.move();

      if (obstacle.left <= window.innerWidth / 2 - 75 && obstacle.goingLeft) {
        setTimeout(() => {
          this.life -= 1;
          console.log(this.life);
          this.healthDOM.innerText = this.life;
          obstacle.element.remove();
          console.log(obstacle);
        }, 2000);
      } else if (
        obstacle.left >= window.innerWidth / 2 - 75 &&
        obstacle.goingRight
      ) {
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
    /* console.log(this.obstacles); */
  }

  spawnBoats(animation) {
    if (animation % 200 === 0) {
      this.obstacles.push(new Enemy(this, this.gameScreen));
    }

    if (animation % 800 === 0) {
      this.obstacles.push(new Birds(this, this.gameScreen));
    }
  }
}
