class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height); 
    World.add(World, this.body); 
    this.visibility=255;
  }

  display(){
    if(this.body.speed<3){
      super.display();
    }else{
      push();
      World.remove(world,this.body);
      this.visibility=this.visibility-5
      tint(255,this.visibility);
      pop();
    }
  }
};  