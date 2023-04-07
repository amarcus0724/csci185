function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    let y = 0;
    let width = 50;
    let x1 = 100;
    let x2 = 300;
    let x3 = 500;
    let x4 = 700;
    let x5 = 900

    while (y <= 650) {
        fill('lightblue'); circle(x1, y, width);
        fill('green'); circle(x2, y, width);
        fill('pink'); circle(x3, y, width);
        fill('yellow'); circle(x4, y, width);
        fill('purple'); circle(x5, y, width);
        y += 15;
        width += 15;
        x1 += 5;
        x2 += 5;
        x3 += 5;
        x4 += 5;
        x5 += 5;
    }
    

   
    // circle(100, 200, 50);
    // circle(100, 250, 50);
    // circle(100, 300, 50);
    // circle(100, 350, 50);
    // circle(100, 400, 50);

    drawGrid(canvasWidth, canvasHeight);
}
