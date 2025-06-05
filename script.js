let currentSound = null;

function playMusic(soundName) {
  // Stop any currently playing sound
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
  }

  // Create new audio and play
  currentSound = new Audio(`./sounds/${soundName}.mp3`);
  currentSound.play();
}

function stopMusic() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
    currentSound = null;
  }
}
