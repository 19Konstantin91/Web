const calcDate = document.getElementById("calcDateBtn");
const timer = document.getElementById("timerBtn");

calcDate.onclick = () => {
  document.getElementById("datecalc").classList.toggle("datecalc");
};

timer.onclick = () => {
  document.getElementById("timer").classList.toggle("timer");
};
