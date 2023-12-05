class MouseAim {
  constructor(imageElement) {
    this.deadeye = imageElement;
    this.init();
    this.width = 100;
    this.height = 100;
  }

  init() {
    document.addEventListener("mousemove", (event) =>
      this.updatePosition(event)
    );
  }

  updatePosition(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    this.deadeye.style.left = `${mouseX}px`;
    this.deadeye.style.top = `${mouseY}px`;
  }
}
