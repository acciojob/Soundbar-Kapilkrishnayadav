//your JS code here. If required.
// let add="https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3";
  let pauseSound;
      function playMusic(e) {
        console.log();
        const sound = new Audio(`https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3`); // path to your sound file
        if (typeof pauseSound === "object" && sound !== null)
        pauseSound.pause();
        pauseSound=sound;
        sound.play();
      }