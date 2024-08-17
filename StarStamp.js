function preload()
{
    star = loadImage ('assets/star.svg.png');
};

function starStampTool() {
    this.icon = "assets/star.svg.png";
    this.name = "starStamp";

    this.draw = function() {
        if (mouseIsPressed) {
            image(star, mouseX - 25, mouseY - 25);

        }
    };
}
