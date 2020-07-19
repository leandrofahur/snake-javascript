// Global vars:
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const frameRate = 30;

const snake = {
  x: canvas.width/2 - 10,
  y: canvas.height/2 - 10,
  w: 20,
  h: 20,
  speed: 10,
}

const coord = generateApple();
console.log(coord);

const game = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawApple(coord.x, coord.y)
  drawSnake();
}

window.onload = () => {
  
  setInterval(game, 1000/frameRate);
}


