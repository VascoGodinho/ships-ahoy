class Birds {
  constructor(game, gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 60;
    this.height = 60;
    this.top = 120;
    this.left = window.innerWidth;
    this.element = document.createElement("img");
    this.element.src = "./Resources/bird.png";

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.left = `${this.left}px`;

    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);

    console.log(this.left);

    this.game = game;

    this.moveSpeed = -6.5;

    this.element.addEventListener("click", () => this.enemyClick());
  }

  move() {
    this.left += this.moveSpeed;

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }

  enemyClick() {
    const game = this.game;
    const index = game.obstacles.indexOf(this);
    if (index !== -1) {
      this.game.obstacles.splice(index, 1);
    }

    this.element.remove();
    game.life += 1;
    game.healthDOM.innerText = game.life;
    this.increaseScore(500);
  }

  increaseScore(points) {
    this.game.score += points;
    this.game.scoreDOM.innerText = this.game.score;
  }
}
