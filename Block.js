class Block{
    constructor(x, y, width, height) {
    var options = {
      restitution :0.6,
      friction :0.002,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display(){

    if(this.body.speed <4){
      var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop();
  }
else{
 World.remove(world, this.body);
 push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     pop();
 }
}
  score(){
  if (this.Visiblity < 0 && this.Visiblity > -1005){
  score++;
}

  }
};