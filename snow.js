class Snow{
constructor(x,y,r){
    var options={
        friction:1,
        density:1,
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.body=Bodies.circle(this.x,this.y,this.r,options)
    this.image=loadImage("snow4.webp")
    World.add(world,this.body)
}
display(){
    push()
    var pos=this.body.position
    translate(pos.x,pos.y)
    imageMode(CENTER)
    image(this.image,this.x,this.y,this.r,this.r)
    pop()
}

}