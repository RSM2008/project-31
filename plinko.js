class Plinko{

    constructor(x,y,r){
        var options={
            isStatic : true
        }
    
    

    this.body = Bodies.circle(x,y,r,options)
    this.r = r;
    World.add(world,this.body);
    }

    display(){
        var pos = thisbody.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.r)
        push();

        for(var j = 40; j <=width; j = j+50){

            plinkos.push(newPlinko(j,75));
        }

        for(var j = 15; j<=width-10; j = j+50){
            plinkos.push(new Plinko(j,175));
        }

        for(var j = 40 ; j<=width; j=j+50){
            plinkos.push(new Plinko(j,75));
        }

        for(var j=15 ; j<= width-10; j=j+50){
            plinkos.push(new Plinko(j,175));
        }
        pop();
    }
};






