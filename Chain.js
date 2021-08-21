class Chain{
 constructor(bodyA,bodyB){
    var options={
        bodyA:bodyA,
        bodyB:bodyB,
        length:50,
        stiffness:0.05
    }
    this.chain= Constraint.create(options);
    World.add(world,this.chain)  
 }   
 display(){
     MediaStreamTrackAudioSourceNode()
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
        this.chain.bodyB.position.x,this.chain.bodyB.position.y)


 }
}