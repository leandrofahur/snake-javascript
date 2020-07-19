// Global vars:
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const generateApple = () => {
  // Genrate random coordinates:
  let x = Math.floor(Math.random() * canvas.width) + 10;
  let y = Math.floor(Math.random() * canvas.height) + 10;
  console.log(`(${x}, ${y})`);

  if(x+10 > canvas.width) {
    x -= 10;
  }
  if(x-10 < 0) {
    x += 10;
  }
  if(y+10 > canvas.height) {
    y -= 10;
  }
  if(y-10 < 0) {
    y += 10;
  }

  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI, true);
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.closePath();
}

generateApple();

