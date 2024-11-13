// part-1
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 650;
// let snakeCells = [[0,0] , [50,0] , [100,0]] ;

// function draw(){}

// function update(){}

// setInterval(function(){
//     update()
//     draw()
// } , 200)


// -------------------------------------
// part-2&3
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let boardWidth = 1200;
let boardHeight = 650;
let snakeCells = [[0,0] , [50,0]] ;

function draw(){
    // eraser
    ctx.clearRect(0,0,1200,650)
    // draw
    for(let cell of snakeCells){
        ctx.fillStyle = "brown"
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
    }
}


function update(){ 
    let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
    let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
    let newHeadX = headX + cellSize;
    let newHeadY = headY;
    snakeCells.push([newHeadX , newHeadY]);
    snakeCells.shift()
}

setInterval(function(){
    update()
    draw()
} , 200)
