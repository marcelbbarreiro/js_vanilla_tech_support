const gameContainer = document.getElementById("gameContainer");
const gridContainer = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
];

gridContainer.map(function (row, index) {
  let rowContainer = document.createElement("div");
  rowContainer.setAttribute("id", "container" + index);
  rowContainer.classList.add("balloons-container");

  row.map(function (balloonContainer, balloonIndex) {
    let redBalloon = document.createElement("div");
    redBalloon.setAttribute(
      "id",
      `${"container" + index + "-balloon" + balloonIndex}`
    );
    redBalloon.setAttribute("data-balloon", balloonIndex);
    redBalloon.classList.add(randomColor());
    rowContainer.appendChild(redBalloon);
  });

  gameContainer.appendChild(rowContainer);
});

function randomColor() {
  let pickClass = Math.floor(Math.random() * 2);
  if (pickClass === 0) {
    return "red-balloon";
  } else if (pickClass === 1) {
    return "blue-balloon";
  }
  console.log(pickClass);
}

gameContainer.addEventListener("click", getBalloonId);
function getBalloonId(e) {
  const balloonElement = e.target
  //console.log(e.target.id)
  //console.log(e.currentTarget.id)
  //console.log(e.target.dataset.balloon)
  //console.log(e.target.classList)
  if (balloonElement.classList.contains("red-balloon")){
    balloonElement.classList.add("is-hidden");
  }else if (balloonElement.classList.contains("blue-balloon")){
      balloonElement.classList.add("is-hidden");
  }
}
