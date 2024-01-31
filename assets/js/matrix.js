// Set up canvas
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set canvas dimensions
canvas.width = 900;
canvas.height = 400;

// Characters used for the Matrix effect
const matrixChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
const chars = matrixChars.split("");

// Font settings
const fontSize = 16;
const columns = canvas.width / fontSize;
let drops = [];
let colors = []; // Array to store unique colors for each column

// Initialize drops and colors
function initDropsAndColors() {
  for (let i = 0; i < columns; i++) {
    drops[i] = 1;
    colors[i] = getRandomColor(); // Generate a random color for each column
  }
}
initDropsAndColors();

// Generate a random color
function getRandomColor() {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8);
}

// Drawing function
function draw() {
  // Black background
  ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Loop over columns
  for (let i = 0; i < drops.length; i++) {
    // Set the color for this column
    ctx.fillStyle = colors[i];
    ctx.font = fontSize + "px arial";

    // Pick a random character
    const text = chars[Math.floor(Math.random() * chars.length)];

    // Draw character
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // Reset drop if it goes off screen
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    // Increment drop
    drops[i]++;
  }
}

// Animation loop
let animationId;

function animate() {
  draw();
  animationId = requestAnimationFrame(animate);
}

// Start animation
function startMatrixEffect() {
  animate();
  const context = canvas.getContext('2d');
  const img = new Image();
  img.src = 'assets/img/youngme.png';
  img.onload = () => {
    context.drawImage(img, 0, 0);
  };
}

// Stop animation
function stopMatrixEffect() {
  cancelAnimationFrame(animationId);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Adjust canvas on window resize
window.addEventListener('resize', function () {
  canvas.width = 307;
  canvas.height = 307;
  stopMatrixEffect();
});

// Change color every 5 seconds
setInterval(() => {
  initDropsAndColors(); // Reset colors to ensure uniqueness
}, 5000);
