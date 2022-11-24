const container = document.querySelector(".container");
let grids = document.querySelectorAll(".gridDiv");
let noOfGrids = 16

const createGrids = (noOfGrids) => {
    for(let i = 0; i < noOfGrids; i++){
        for(let i = 0; i < noOfGrids; i++){
            const div = document.createElement("div");
            div.classList.add("gridDiv");
            container.appendChild(div);
        }
    }
    container.style.cssText = `grid-template-rows: repeat(${noOfGrids}, 1fr);
    grid-template-columns: repeat(${noOfGrids},1fr)` ;
    grids = document.querySelectorAll(".gridDiv");
    grids.forEach((grid) => {
        grid.addEventListener("mouseover", (e) => {
            grid.classList.add("draw-color");
        })
    })
}

createGrids(noOfGrids)


const resetBoard = () => {
    grids.forEach((grid) => {
        grid.classList.remove("draw-color");
    })
}

const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    resetBoard();
})

const size = document.querySelector("#size");

size.addEventListener("input", () => {
    noOfGrids = size.value;
    resetBoard();
    createGrids(noOfGrids)
})
