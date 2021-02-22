class Launcher{

    constructor(body,point){
        var options={
            bodyA:body,
            pointB:point,
            stiffness:0.01,
            length:40
        }

        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
        this.point=point;


    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if (this.launcher.bodyA){
            line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.point.x,this.point.y);
        }
    }






}