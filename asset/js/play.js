document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const playPauseIcon = document.getElementById("play-pause-icon");
  const playPauseBtn = document.getElementById("play-pause");
  audio.play();
  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseIcon.src = "./images/icons/volume.png";
    } else {
      audio.pause();
      playPauseIcon.src = "./images/icons/volume-mute.png";
    }
  });
  audio.addEventListener("ended", function () {
    playPauseBtn.textContent = "Play";
  });
});
