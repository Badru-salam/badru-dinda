const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");

playBtn.addEventListener("click", function () {
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", function () {
  audio.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "block";
});
