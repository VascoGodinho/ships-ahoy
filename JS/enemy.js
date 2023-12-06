class Enemy {
  constructor(game, gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 150;
    this.height = 100;
    this.top = Math.floor(Math.random() * 500 + 150);
    this.goingLeft = false;
    this.goingRight = false;
    this.element = document.createElement("img");
    this.element.src = "./Resources/pirate-ship.png";

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    if (Math.floor(Math.random() > 0.5)) {
      this.left = window.innerWidth;
      this.goingLeft = true;
      this.element.style.transform = "scaleX(-1)";
    } else {
      this.left = -150;
      this.goingRight = true;
    }
    this.element.style.left = `${this.left}px`;

    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);

    console.log(this.left);

    this.game = game;

    this.moveSpeed = 2;

    this.limitTime = 2000;
    this.timeInMiddle = 0;
    this.inMiddle = false;
    console.log(window.innerWidth);

    this.element.addEventListener("click", () => this.enemyClick());
  }

  move() {
    if (this.goingRight && this.left < window.innerWidth / 2 - 75) {
      this.left += this.moveSpeed;
    } else if (this.goingLeft && this.left > window.innerWidth / 2 - 75) {
      this.left -= this.moveSpeed;
    }

    /*    if (this.left == window.innerWidth / 2 - 75) {
      this.left = window.innerWidth / 2 - 75;
      this.updatePosition();
      return true;
    } */

    /*   if (this.left >= window.innerWidth) {
      this.left = window.innerWidth / 2 - 75;
      this.updatePosition();
      return true;
    } */
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

    this.increaseScore(100);
  }

  increaseScore(points) {
    this.game.score += points;
    this.game.scoreDOM.innerText = this.game.score;
  }
}
