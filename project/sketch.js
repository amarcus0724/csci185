// let x = 100;
// let y = 200;
// let width = 50;
let fillColor = '#5591a9';

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const pellets = [
   {x: 600, y: 650, width:20}, 
   {x: 200, y: 155, width:20},
   {x: 175, y: 260, width:20},
   {x: 50, y: 700, width:20},
   {x: 700, y: 350, width:20},
   {x: 550, y: 200, width:20},
   {x: 1200, y: 120, width:20},
   {x: 850, y: 230, width:20},
   {x: 1000, y: 600, width:20},
   {x: 1350, y: 690, width:20},

]
const player = {
   x:100, y:200, width:50
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    fill(fillColor);
    // noFill();
    circle(player.x, player.y, player.width);
    showMessage();
    checkCollision();
    drawPellets();

    
}

function moveController(ev) {
    console.log(ev.code);
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down
    if (ev.code === 'ArrowUp') {
       player.y = player.y - 10;
    }
    else if (ev.code === 'ArrowDown') {
        player.y = player.y + 10;
    }
    if (ev.code === 'ArrowRight') {
      player.x = player.x + 10;
     }
     else if (ev.code === 'ArrowLeft') {
      player.x = player.x - 10;
     }
     if (ev.code === 'Space') {
      player.width = player.width - 10;
     }
     else if (ev.code === 'ShiftLeft') {
      player.width = player.width + 10;
     }
      
     if (ev.code === 'KeyR') {
        fillColor = 'red';
     }
     else if (ev.code === 'KeyB') {
        fillColor = 'blue';
     }

    // redraw circle:
    clear();
    fill(fillColor);
    // noFill();
    circle(player.x, player.y,player. width);

   showMessage();
   checkCollision();
   drawPellets();
   if (pellets.length === 0) {
      console.log('you win')
      window.location.href='end.html'
   }
   
   
   
    
}
function showMessage() {
   textSize(40); 
    fill('#062c43');
   // text('Collect the dots using the arrow keys!', 400, 60);
   
   
}
function drawPellets() {
   for (let i = 0; i < pellets.length; i++) {
      circle(pellets[i].x, pellets[i].y, pellets[i].width);
   }

}
function checkIntersection(circle1, circle2) {
   const distance = dist(circle1.x, circle1.y, circle2.x, circle2.y);
   if (distance <= (circle1.width/2 + circle2.width/2)) {
       return true;
   } else {
       return false;
   }
}
function checkCollision() {
   for (let i = 0; i < pellets.length; i++) {
      let intersects = checkIntersection(player, pellets[i])
      if (intersects) {
         pellets.splice(i,1);
         return
      }
   }
}


// Add event listener on keydown
document.addEventListener('keydown', moveController);
