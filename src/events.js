// Keydown event
function keyDown(evt) {
  if (evt.key === 'Right' || evt.key === 'ArrowRight') {
    snake.x += snake.speed;
  } else if (evt.key === 'Left' || evt.key === 'ArrowLeft') {
    snake.x -= snake.speed;
  } else if (evt.key === 'Up' || evt.key === 'ArrowUp') {
    snake.y -= snake.speed;
  } else if (evt.key === 'Down' || evt.key === 'ArrowDown') {
    snake.y += snake.speed;
  };
}

// Keyup event
function keyUp(evt) {
  if (
    evt.key === 'Right' ||
    evt.key === 'ArrowRight' ||
    evt.key === 'Left' ||
    evt.key === 'ArrowLeft'
  ) {
    snake.x = snake.x;
  }
  if (
    evt.key === 'Up' ||
    evt.key === 'ArrowUp' ||
    evt.key === 'Down' ||
    evt.key === 'ArrowDown'
  ) {
    snake.y = snake.y;
  }
}

// Keyboard event handlers
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);