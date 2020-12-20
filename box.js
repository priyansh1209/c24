class Box{
    constructor(x,y,width,height){
       
        var options = {
            restitution: 0.5
        }
        
        this.width = width
        this.height = height

        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    
    
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y) 
        rotate(this.body.angle)
        rectMode(CENTER)
        fill("brown")
        stroke("black")
        strokeWeight(3)
        rect(0,0,this.width,this.height)
        pop()
    }



}