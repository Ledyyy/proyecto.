
var bloque1;
var bloque2;
var joaquin;
var bloque3;
var bloque4;
var Try = 0;
var borde1;
var borde2;
var bloquesote;
var bloquesote2;
function setup(){
  createCanvas(400, 400);
  borde1 = createSprite(190,260,420,2);
  borde2 = createSprite(190,120,420,2);
  borde1.shapeColor = "Black"
  borde2.shapeColor = "Black"
  
  //Crea al sprite del personaje y dale color
  
  
  //Crea los carros que funcionarán como obstáculos y pintalos de rojo
  bloque1 = createSprite(100,220,10,10);
  bloque1.shapeColor = "GREEN"
  bloque2 = createSprite(215,130,10,10);
  bloque2.shapeColor = "GREEN"
  bloque3 = createSprite(165,130,10,10);
  bloque3.shapeColor = "GREEN"
  bloque4 = createSprite(270,130,10,10);
  bloque4.shapeColor = "GREEN"
  joaquin = createSprite(20,190,13,13);
  joaquin.shapeColor = "PURPLE"
  bloquesote1 =createSprite(100,170,10,100);
  bloquesote1.shapeColor = "PURPLE"
  bloquesote2 = createSprite(270,210,10,100)
  bloquesote2.shapeColor ="PURPLE"
  
  //Crea la variable que guardará los intentos el jugador
  
  
  
  //Agrega velocidad  para hacer que los autos  se muevan.
  bloque1.velocityY = 1;
  bloque2.velocityY = 2;
  bloque3.velocityY = -1;
  bloque4.velocityY = -2;
}

function draw() {
   background("white");
   //Muestra en la pantalla los intentos del jugador
   
  strokeWeight(0);
  fill("lightgreen");
  rect(0,120,520,140);
 
  
//Crea la función bounceoff para hacer que el auto rebote en los límites.
  bloque1.bounceOff(borde1);
  bloque2.bounceOff(borde1);
  bloque3.bounceOff(borde1);
  bloque4.bounceOff(borde1);
  bloque1.bounceOff(borde2);
  bloque2.bounceOff(borde2);
  bloque3.bounceOff(borde2);
  bloque4.bounceOff(borde2);
  bloque1.bounceOff(bloquesote1);
  bloque4.bounceOff(bloquesote2);
//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
  if(keyDown("right_arrow")){
    joaquin.x = joaquin.x+2;
  }
  if(keyDown("left_arrow")){
    joaquin.x = joaquin.x-2;
  }
  if(keyDown("down_arrow")){
    joaquin.y = joaquin.y+2;
  }
  if(keyDown("up_arrow")){
    joaquin.y = joaquin.y-2
  }
//Agregar la condición de reducir la vida de Sam si toca el carro.
  if(joaquin.isTouching(bloque1)||joaquin.isTouching(bloque2)|| joaquin.isTouching(bloque3)|| joaquin.isTouching(bloque4) ){
    Try = Try+1;
    joaquin.x = 20;
    joaquin.y = 190;
    
  }
  if(joaquin.isTouching(bloquesote1)||joaquin.isTouching(bloquesote2)){
    Try = Try+1;
    joaquin.x = 20;
    joaquin.y = 190;
  }
 drawSprites();
}
