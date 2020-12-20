class Bird{
    constructor(x,y){
        
        var options={
            restitution: 0.25
        }
        
        this.body = Bodies.rectangle(x,y,50,50,options)
        World.add(world,this.body)
    }

    display(){
       var pos = this.body.position 
       pos.x = mouseX
       pos.y = mouseY
        rectMode(CENTER)
       
        push()
        translate(pos.x,pos.y)
        rotate(this.body.angle)
        fill("red")
        stroke("purple")
        strokeWeight(2)
        rect(0,0,50,50)
        pop()
    }

}
