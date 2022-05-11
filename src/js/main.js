const gameContainer = document.getElementById("gameContainer");
const gridContainer = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];

let index = 0;
gridContainer.map(function (row) {
    let rowContainer = document.createElement("div");
    rowContainer.setAttribute("id", "balloon" + index++);
    rowContainer.classList.add("purple-balloon");
    console.log("hola");

    row.map(function () {

    });


    gameContainer.appendChild(rowContainer);
});