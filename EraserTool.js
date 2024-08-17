function EraserTool() {
    this.name = "EraserTool";
    this.icon = "assets/eraser_icon.jpg"; 
    this.size = 30; // Default size of the eraser

    this.draw = function() {
        if (mouseIsPressed) {
            push();
            noStroke();
            fill(255); // Use white color to erase
            ellipse(mouseX, mouseY, this.size, this.size);
            pop();

        } else {
            push();
            noFill();
            stroke(0);
            ellipse(mouseX, mouseY, self.size, self.size); // Transparent circle
            pop();
        }
    };
}