export const puzzleBuild = (puzzle, data, grid) => {
    data[0].textContent += ` ${puzzle.name}`;
    data[1].textContent += ` ${puzzle.max_vertices}`;
    data[2].textContent += ` ${puzzle.goal}`;
    data[3].textContent += ` ${puzzle.info.creator}`;
    data[4].textContent += ` ${puzzle.info.verified}`;
    puzzle.grid.forEach((row) => {
        const gridRow = document.createElement("tr");
        row.forEach((col) => {
            const cell = document.createElement("td");
            cell.classList = col;
            gridRow.appendChild(cell);
        });
        grid.appendChild(gridRow);
    });
};
