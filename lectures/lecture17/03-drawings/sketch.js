function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("#EEE");

    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */

    // https://p5js.org/reference/#/p5/circle
    fill("yellow")
    circle(300, 300, 200);

    // https://p5js.org/reference/#/p5/rect
    fill('hotpink')
    rect(30, 20, 55, 55);

    // add your drawing here:
    // https://p5js.org/reference/#/p5/circle
    fill("teal")
    circle(260, 260, 50)

    // https://p5js.org/reference/#/p5/circle
    fill("teal")
    circle(340, 260, 50)

    // Curve: https://p5js.org/reference/#/p5/curve
    fill('black')
    strokeWeight(5)
    stroke('black')
    curve(300,300,100,100,200,200)
    
    
    // https://p5js.org/reference/#/p5/point
    // point(110, 20);

    // https://p5js.org/reference/#/p5/text
    // text("Here is some text", 200, 40);

    // https://p5js.org/reference/#/p5/ellipse
    // fill('red');
    // ellipse(100, 200, 60, 100);

    // Other shapes...
    // Polygon: https://p5js.org/reference/#/p5/beginShape
    // Line: https://p5js.org/reference/#/p5/line
    
    // Curve: https://p5js.org/reference/#/p5/curve


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}