const snakeEatApple = () => {
  if(snake.x + snake.w > coord.x - 10) {
    // console.log('It is a hit from the left...');
    console.log('It is a hit 1 !!!');
  } 
  if(snake.x < coord.x + 10) {
      // console.log('It is a hit from the right...');
      console.log('It is a hit 2 !!!');
  }
  if(snake.y + snake.h > coord.y - 10) {
    // console.log('It is a hit from up...');
    console.log('It is a hit 3 !!!');
  } 
  if(snake.y < coord.y + 10) {
      // console.log('It is a hit from down...');
      console.log('It is a hit 4 !!!');
  }

}
