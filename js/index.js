import { puzzleBuild } from "./dependencies/library.js";
import * as puzzles from "./dependencies/puzzles.js";

window.onload = () => {
    const grid = document.getElementById("grid");
    const text = document.getElementsByClassName("text");

    puzzleBuild(puzzles.testing, text, grid);
};
