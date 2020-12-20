class Pig{
    constructor(x,y){
        
        var options={
            restitution: 0.25
        }
        
        this.body = Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }

    display(){
       var pos = this.body.position 
        rectMode(CENTER)
       
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("green")
        stroke("lime")
        strokeWeight(2)
        rect(0,0,50,50)
        pop()
    }

}

