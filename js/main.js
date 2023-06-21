var musicButton = document.getElementById('musicButton');
var backgroundMusic = document.getElementById('backgroundMusic');
var isPlaying = false;
musicButton.addEventListener('click', function() {
  if (isPlaying) {
    backgroundMusic.pause();
    musicButton.src = "music/iconOn.png";
  } 
  else {
    backgroundMusic.play();
    musicButton.src = "music/iconOff.png";
  }
  isPlaying = !isPlaying;
});
