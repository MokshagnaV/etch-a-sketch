const getdivs = (cont, num) => {
    for(let i = 0; i < num; i++){
        const div = document.createElement("div");
        div.classList.add("gridDiv");
        cont.appendChild(div);
    }
}

const container = document.querySelector(".container");

for(let i = 0; i < 16; i++){
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    getdivs(rowDiv, 16);
    container.append(rowDiv);
}

const grids = document.querySelectorAll(".gridDiv");
console.log(grids)
grids.forEach((grid) => {
    grid.addEventListener("mouseover", (e) => {
        grid.classList.add("draw-color");
        console.log('grid');
    })
})

const resetBoard = () => {
    grids.forEach((grid) => {
        grid.classList.remove("draw-color");
    })
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    resetBoard();
})