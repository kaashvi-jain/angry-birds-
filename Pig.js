class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visbilty = 250;
  }
  display(){
    if(this.body.speed<3){
      super.display();
    }
    else{
      World.remove(world,this.body);
      this.visbilty -= 2;
      push ();
      tint (255,this.visbilty);
      image (this.image,this.body.position.x,this.body.position.y,50,50)
      pop ();
    }
  
 
}

}