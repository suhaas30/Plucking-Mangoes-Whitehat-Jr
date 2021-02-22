class Stone{

    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }

        this.image=loadImage("images/stone.png");
        this.body=Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);





    }

    display(){
      push();
      imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);
        pop();
    }









}