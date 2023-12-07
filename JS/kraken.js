class Kraken {
  constructor(game, gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 500;
    this.height = 650;
    this.top = window.innerHeight - 650;
    /*  console.log(window.innerHeight); */
    this.left = window.innerWidth / 2 - 250;
    this.element = document.createElement("img");
    this.element.src = "./Resources/kraken.png";

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.left = `${this.left}px`;

    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);

    this.game = game;
    this.krakenLife = 10;

    this.moveSpeed = -1.5;
    this.frameStop = 500;

    this.element.addEventListener("click", () => this.enemyClick());
  }

  move() {
    this.top += this.moveSpeed;
    const game = this.game;
    /* console.log(window.innerHeight / 2 + 250 + ` / ` + this.top / 2); */
    if (this.top / 2 <= 0) {
      this.moveSpeed = 0;
      this.frameStop -= 1;
      if (this.frameStop === 0) {
        game.life -= 2;
        game.healthDOM.innerText = game.life;

        this.element.remove();
      }
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
  }

  enemyClick() {
    const game = this.game;
    const index = game.obstacles.indexOf(this);

    if (this.krakenLife === 1) {
      if (index !== -1) {
        this.game.obstacles.splice(index, 1);
      }
      this.element.remove();
      this.increaseScore(5000);
    } else {
      this.krakenLife -= 1;
    }
  }

  increaseScore(points) {
    this.game.score += points;
    this.game.scoreDOM.innerText = this.game.score;
  }
}
