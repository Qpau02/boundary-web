import { puzzleBuild, getVertice } from "./dependencies/library.js";
import * as puzzles from "./dependencies/puzzles.js";

window.onload = () => {
    const canvas = document.getElementById("canvas");
    const grid = document.getElementById("grid");
    const text = document.getElementsByClassName("text");

    puzzleBuild(puzzles.testing, text, grid);

    canvas.style.width = `${grid.offsetWidth}px`;
    canvas.style.height = `${grid.offsetHeight}px`;

    canvas.addEventListener("click", (e) => {
        getVertice(canvas, e);
    });
};
