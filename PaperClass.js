class Paper  {

    constructor(x,y,radius) {

        var prop1 = {
            isStatic : false , 
            restitution : 0.3 , 
            friction : 0.5 , 
            density : 1.2 

        }

        this.radius = radius ; 
        this.body = Bodies.circle(x,y,radius,prop1) ; 
        World.add(world,this.body) ; 




    }

    display () {

        ellipseMode(RADIUS) ; 
        circle(this.body.position.x, this.body.position.y, this.radius) ;
        
        fill("blue") ; 
    }


}