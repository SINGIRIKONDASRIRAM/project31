class drop {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
}
var maxDrops=100;
for(var i=0; i<maxDrops; i++){
    maxDrops.push(new createDrop(random(0,400), random(o,400)));
}