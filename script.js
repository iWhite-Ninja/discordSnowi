document.addEventListener('DOMContentLoaded', function () {
  const snowflakesContainer = document.querySelector('.snowflakes');
  let numberOfSnowflakes = calculateNumberOfSnowflakes();

  window.addEventListener('resize', () => {
    numberOfSnowflakes = calculateNumberOfSnowflakes();
    resetSnowflakes();
  });

  for (let i = 0; i < numberOfSnowflakes; i++) {
    createSnowflake();
  }

  function calculateNumberOfSnowflakes() {
    // Adjust the number of snowflakes based on the screen width
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
      return 30;
    } else if (screenWidth < 1200) {
      return 50;
    } else {
      return 100;
    }
  }

  function resetSnowflakes() {
    // Remove existing snowflakes
    snowflakesContainer.innerHTML = '';

    // Create new snowflakes based on the updated count
    for (let i = 0; i < numberOfSnowflakes; i++) {
      createSnowflake();
    }
  }

  function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';

    const size = Math.random() * 3 + 1;
    const duration = Math.random() * 5 + 2;

    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${duration}s`;

    snowflakesContainer.appendChild(snowflake);

    snowflake.addEventListener('animationiteration', () => {
      snowflake.style.left = `${Math.random() * 100}vw`;
    });
  }

  window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    snowflakesContainer.style.transform = `translate(${x}px, ${y}px)`;
  });
});
