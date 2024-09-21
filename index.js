onload = () => {
  document.body.classList.remove("container");
};
const playButt = document.getElementById("playButton");
playButt.addEventListener("click", function () {
  console.log("a");
  let audio = document.getElementById("miAudio");
  audio.play().catch(function (error) {
    console.log("Error al reproducir el audio:", error);
  });
  playButt.id = "pauseButton";
});
