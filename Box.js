class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("wood1.png");
    this.visibility=255
  }
  display()
  {
//console.log(this.body.speed);
if(this.body.speed<8)
{
super.display();
}
else
{
// vanish
World.remove(world, this.body);


push();
this.visibilty=this.visibilty-5
tint(255,this.visibilty)
image(this.image,this.body.position.x,this.body.position.y,50,50)
pop();

}
  }

};
