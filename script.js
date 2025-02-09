const flipCard = document.getElementById('flipCard');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const letter = document.getElementById('letter');

// When "Yes" is clicked, animate the opening letter and flip the card.
yesBtn.addEventListener('click', () => {
  letter.classList.add('open');
  flipCard.classList.add('flipped');
});

// For "No", you might want to provide a playful response.
noBtn.addEventListener('click', () => {
  flipCard.classList.remove('shake');
  void flipCard.offsetWidth;  // Trigger reflow to restart the animation.
  flipCard.classList.add('shake');
});
