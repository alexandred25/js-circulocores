
let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y


function setup() {
 random(0, 255)
 createCanvas(400, 400);
 background("white")
 cor= color(random(0, 255), random(0, 255), random(0, 255))
}

function draw () {
  
  fill(cor)
  circle (200, 200, 50);
}