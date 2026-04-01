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

export const getVertice = (canvas, event) => {
    const canvasData = canvas.getBoundingClientRect();
    const x = parseInt(event.clientX - canvasData.left);
    const y = parseInt(event.clientY - canvasData.top);
    const col = parseInt(x / 52 + 1);
    const row = parseInt(y / 52 + 1);

    if (x > (col - 1) * 52 + 27) {
        if (y > 27 + (row - 1) * 52) console.log(`Column: ${col} | Row: ${row} | Vertice 4`);
        else console.log(`Column: ${col} | Row: ${row} | Vertice 2`);
    } else {
        if (y > 27 + (row - 1) * 52) console.log(`Column: ${col} | Row: ${row} | Vertice 3`);
        else console.log(`Column: ${col} | Row: ${row} | Vertice 1`);
    }
};
