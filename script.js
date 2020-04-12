const cnv = document.getElementById('canvas');
const ctx = cnv.getContext('2d');

// Конфигурация симуляции
const cfg = {
  fieldSize: { x: 15, y: 15},
  gridColor: 'rgba(96,192,255, 0.1)'
}

let w, h, cw, ch, cx, cy, pixSize;
function resizeCanvas() {
  w = innerWidth;
  h = innerHeight;
  cx = cw / 2;
  cy = ch / 2;
  pixSize = (w/cfg.fieldSize.x*cfg.fieldSize.y > h) ? h/cfg.fieldSize.y : w/cfg.fieldSize.x;
  cw = cnv.width = cfg.fieldSize.x*pixSize;
  ch = cnv.height = cfg.fieldSize.y*pixSize;
  drawGrid();
 
}
resizeCanvas();
window.addEventListener(`resize`, resizeCanvas);

function drawField (x, y, w, h) {
  ctx.fillStyle = 'blue';
  ctx.strokeStyle = 'blue';
  ctx.lineJoin = 'miter';
  ctx.lineWidth = 1;
  ctx.rect(x, y, w, h);
  ctx.fill();
}

function drawGrid () {
  function drawLine (x1, y1, x2, y2, color = cfg.gridColor) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
  for (let x = 0; x < cw; x += pixSize) drawLine(x, 0, x, ch);
  for (let y = 0; y < ch; y += pixSize) drawLine(0, y, cw, y);
}
drawGrid();