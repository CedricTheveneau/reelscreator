const playBtn = document.querySelector(".startAnimation");
const stopBtn = document.querySelector(".stopAnimation");
const reelWindow = document.querySelector(".reelWindow");

const startAnimation = () => {
  reelWindow.classList.add("play");
};

const stopAnimation = () => {
  reelWindow.classList.remove("play");
};

playBtn.addEventListener("click", startAnimation());
stopBtn.addEventListener("click", stopAnimation());
