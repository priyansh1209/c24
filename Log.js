class Log{
    constructor(x,y,height,angle){
        
        var options={
            restitution: 0.25,
            
        }
        
        this.height = height
        
        this.body =Bodies.rectangle(x,y,20,height,options)
        World.add(world,this.body)
        Matter.Body.setAngle(this.body,angle)
    }

    display(){
        var pos = this.body.position
        rectMode(CENTER)
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("blue")
        stroke("red")
        strokeWeight(3)
        rect(0,0,20,this.height)
        pop()
    }


}