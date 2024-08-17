function zoomTool ()
{
    this.icon = "assets/zoom_icon.png";
    this.name = "zoomTool";
    
    let rectX = 200;  // Initial x position of the rectangle
    let rectY = 200;  // Initial y position of the rectangle
    let rectW = 150;  // Width of the rectangle
    let rectH = 100;  // Height of the rectangle
    let dragging = false;  // Is the rectangle being dragged?
    let offsetX, offsetY;  // Mouse offset for dragging

    this.draw = function() 
        {
        //background(255);
        
        // Draw the rectangle
        stroke(0);                          // Black border
        fill(255, 255, 255, 0);             // Transparent fill
        rect(rectX, rectY, rectW, rectH);
        }

    this.mousePressed = function() 
        {
        // Check if the mouse is inside the rectangle
        if (mouseX > rectX && mouseX < rectX + rectW && mouseY > rectY && mouseY < rectY + rectH) 
            {
            dragging = true;
            offsetX = mouseX - rectX;
            offsetY = mouseY - rectY;
            }
        }

    this.mouseDragged = function() 
        {
        if (dragging) 
            {
            rectX = mouseX - offsetX;
            rectY = mouseY - offsetY;
            }
        }

    this.mouseReleased = function() 
        {
        dragging = false;
        }
}



