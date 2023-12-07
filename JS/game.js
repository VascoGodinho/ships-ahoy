class Game {
  constructor() {
    this.mainPage = document.getElementById("gameIntro");
    this.gameScreen = document.getElementById("gameScreen");
    this.gameOverScreen = document.getElementById("gameOver");

    this.obstacles = [];

    this.score = 0;
    this.life = 3;
    this.gameIsOver = false;
    this.healthDOM = document.getElementById("lives");
    this.scoreDOM = document.getElementById("score");

    this.backgroundMusic = new Audio("./Resources/drunkenMusic.mp3");
    this.clickSound = new Audio("./Resources/cannonShot.wav");
    this.backgroundMusic.volume = 0.4;
    this.clickSound.volume = 0.65;

    this.gameScreen.addEventListener("click", () => {
      this.playClickSound();
    });
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

    this.backgroundMusic.loop = true;
    this.backgroundMusic.play();

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
      this.backgroundMusic.pause();
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
    if (animation % 55 === 0) {
      this.obstacles.push(new Enemy(this, this.gameScreen));
    }

    if (animation % 800 === 0) {
      this.obstacles.push(new Birds(this, this.gameScreen));
    }
    if (animation % 1500 === 0) {
      this.obstacles.push(new Kraken(this, this.gameScreen));
    }
  }

  playClickSound() {
    this.clickSound.play();
  }
}
