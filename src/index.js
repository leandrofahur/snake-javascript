const game = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawApple(coord.x, coord.y);
  drawSnake();
}

window.onload = () => {
  setInterval(game, 1000/frameRate);
}


