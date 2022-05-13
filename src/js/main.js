const gameContainer = document.getElementById("gameContainer");
const gridContainer = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];

gridContainer.map(function (row, index) {

    let rowContainer = document.createElement("div");
    rowContainer.setAttribute("id", "container" + index);
    rowContainer.classList.add("balloons-container");

    row.map(function (balloonContainer, balloonIndex) {
        console.log(row);
        let redBalloon = document.createElement("div");
        redBalloon.setAttribute("id", `${"container" + index + "-balloon" + balloonIndex}`);
        redBalloon.setAttribute("data-balloon", balloonIndex)
        redBalloon.classList.add("red-balloon");


        rowContainer.appendChild(redBalloon)
    });


    gameContainer.appendChild(rowContainer);
});