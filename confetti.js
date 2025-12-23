var duration = 1 * 1000;
var end = Date.now() + duration;

(function frame() {
  confetti({
    shapes: ['star', 'circle', 'square'],
    colors: ['#ED3500', '#FFD8D8', '#093FB4', '#FFFCFB'],
    particleCount: 12,
    angle: 60,
    spread: 1000,
    origin: { x: 0, y: 0 }
  });

  confetti({
    shapes: ['star', 'circle', 'square'],
    colors: ['#ED3500', '#FFD8D8', '#093FB4', '#FFFCFB'],
    particleCount: 12,
    angle: 120,
    spread: 1000,
    origin: { x: 1, y: 0 }
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());