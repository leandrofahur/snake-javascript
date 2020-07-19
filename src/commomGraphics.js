// Generate random coordinates and draw the apple:
const generateApple = () => {
  // Genrate random coordinates:
  let x = Math.floor(Math.random() * canvas.width) + 10;
  let y = Math.floor(Math.random() * canvas.height) + 10;
  console.log(`(${x}, ${y})`);

  if(x+20 > canvas.width) {
    x -= 20;
  }
  if(x-20 < 0) {
    x += 20;
  }
  if(y+20 > canvas.height) {
    y -= 20;
  }
  if(y-20 < 0) {
    y += 20;
  }

  return {
    x: x,
    y: y
  };

  // // Draw the circle (colision form):
  // ctx.beginPath();
  // ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
  // ctx.fillStyle = 'red';
  // ctx.fill();
  // ctx.closePath();
}

const drawApple = (x, y) => {
  // Draw the circle (colision form):
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
  ctx.fillStyle = 'red';
  ctx.fill();
  ctx.closePath();
}

// Draw the snake and update the position:
const drawSnake = () => {
  ctx.beginPath();
  ctx.rect(snake.x, snake.y, snake.w, snake.h);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.closePath();

  snake.x += snake.speed/2;
  // snake.y += snake.speed/2;

  if(snake.x + snake.w > canvas.width) {
    snake.x = 0;
  }
  if(snake.x < 0) {
    snake.x = canvas.width - snake.w;
  }
  if(snake.y + snake.h > canvas.height) {
    snake.y = 0;
  }
  if(snake.y < 0) {
    snake.y = canvas.height - snake.h;
  }

}
