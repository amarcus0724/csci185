function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    makeCreature(200, 400, 'pink', 'purple');
    makeCreature(500, 600, 'blue', 'green');
    makeCreature(700,800, 'purple', 'pink');
    makeCreature(900,300, 'green', 'blue');
    

    // your creature:
    






    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function makeCreature(x, y, fillColor, eyeColor) {
    
    fill(fillColor);
    circle(x, y, 300);

    fill(eyeColor);
    ellipse(x - 50, y - 50, 30, 40); // x, y, width, height 
    ellipse(x + 50, y - 50, 30, 40);

}

function mouseClicked() {
    makeCreature(mouseX, mouseY, 'pink', 'purple')
}
function mouseDragged() {
    makeCreature(mouseX, mouseY, 'lightblue', 'white')
}