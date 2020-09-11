var control;
var fixed;


  function setup() {
    createCanvas(800,800);
    control = createSprite(0,0,50,50);
    fixed = createSprite(400,400,50,40);
    control.debug = true;
    fixed.debug = true;
  }


function draw() {
  background("#C0c0c0");  
  control.x = mouseX;
  control.y = mouseY;
  if (control.x - fixed.x <= control.width/2 + fixed.width/2 && fixed.x - control.x <= control.width/2 + fixed.width/2
     && control.y - fixed.y <= control.height/2 + fixed.height/2 && fixed.y - control.y <= control.height/2 + fixed.height/2){
    control.shapeColor = rgb(255,0,0);
    fixed.shapeColor = rgb(255,0,0);
  } else {
    control.shapeColor = "green";
    fixed.shapeColor = "green";
  }
  console.log(control.x - fixed.x);


  drawSprites();
}
