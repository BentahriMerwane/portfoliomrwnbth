
  // JavaScript for typing effect
  const typedElement = document.querySelector('.typed');
  const typedItems = typedElement.getAttribute('data-typed-items').split(',');
  let index = 0;
  let typingSpeed = 100; // Adjust typing speed here

  function typeText() {
    typedElement.textContent = typedItems[index].substring(0, typedElement.textContent.length + 1);
    if (typedElement.textContent === typedItems[index]) {
      setTimeout(eraseText, 2000); // Wait for 2 seconds before erasing
    } else {
      setTimeout(typeText, typingSpeed); // Continue typing
    }
  }

  function eraseText() {
    typedElement.textContent = typedItems[index].substring(0, typedElement.textContent.length - 1);
    if (typedElement.textContent === '') {
      index = (index + 1) % typedItems.length; // Move to next item
      setTimeout(typeText, typingSpeed); // Start typing next item after erasing
    } else {
      setTimeout(eraseText, typingSpeed); // Continue erasing
    }
  }

  typeText();

