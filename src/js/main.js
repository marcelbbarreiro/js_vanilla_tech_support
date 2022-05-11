const gameContainer = document.getElementById("gameContainer");
const gridContainer = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];
const dragonBall = "https://i.pinimg.com/originals/6b/93/91/6b9391fc5f7e7354d1067116b5b1d372.png"

let index = 0;
gridContainer.map(function (row) {
    let rowContainer = document.createElement("div");
    rowContainer.setAttribute("id", "balloon" + index++);
    rowContainer.classList.add("purple-balloon");

    row.map(function () {
      let redBalloon = document.createElement("img");
      redBalloon.src = dragonBall;
      redBalloon.classList.add("dragon-ball");


      rowContainer.appendChild(redBalloon)
    });


    gameContainer.appendChild(rowContainer);
});