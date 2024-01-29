
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

  // Initialize drops
  function initDrops() {
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }
  }
  initDrops();

  // Drawing function
  function draw() {
    // Black background
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Green text
    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px arial";

    // Loop over columns
    for (let i = 0; i < drops.length; i++) {
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
    img.src = 'assets/img/avatar.png';
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
