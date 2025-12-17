// main.js
// Students: use this file for any interactive or "fun" JavaScript you want on your site.

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS is connected and the page is ready.');

  // Example: make the "Play the Game" button do something fun when clicked.
  const playButton = document.querySelector('.play-button');
  if (playButton) {
    playButton.addEventListener('click', () => {
      // You can customize this message or behavior
      console.log('Play button clicked!');
      // alert('Good luck! Have fun playing the game!');
    });
  }

  // Students: you can add more JavaScript here for hover effects, animations, etc.
});
