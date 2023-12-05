class Enemy {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 150;
    this.height = 100;
    this.top = Math.floor(Math.random() * 500 + 150);
    this.left = 0;

    this.element = document.createElement("img");
    this.element.src = "/Resources/pirate-ship.png";

    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.direction = `${180}deg`;
    this.element.style.top = `${this.top}px`;
    this.gameScreen.appendChild(this.element);

    this.moveSpeed = 2;

    this.limitTime = 2000;
    this.timeInMiddle = 0;
    this.inMiddle = false;
    console.log(window.innerWidth);
  }

  move() {
    if (this.left < window.innerWidth / 2) {
      this.left += this.moveSpeed;
    }

    if (this.left >= window.innerWidth / 2) {
      this.left = window.innerWidth / 2;
      this.updatePosition();
      return true;
    }
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }
}
