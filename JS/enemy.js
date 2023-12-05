class Enemy
{
    constructor()
    {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement("img");
        this.element.src =  "/Resources/pirate-ship.png"

        this.element.style.position = "absolute";

    }

    createEnemy()
    {
     const enemy = document.createElement(`div`);
     enemy.className = `enemy`;
     
     const randomY = Math.random() * this.height;
    }
}