const gameContainer = document.getElementById("gameContainer");
const gridContainer = ["", "", "", ""];

let index = 0;
gridContainer.map(function () {
  index++;
  let rowContainer = document.createElement("div");
  rowContainer.setAttribute("id", "baloon" + index);

  gameContainer.appendChild(rowContainer);
});
