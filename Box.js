class Box{

    constructor(){

        var options ={
            restitution: 1.0
        }
    
        this.body = Bodies.rectangle(200,100,50,50, options);
        World.add(world,this.body);
    
    }

    display(){

        fill("white");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);




    }









}