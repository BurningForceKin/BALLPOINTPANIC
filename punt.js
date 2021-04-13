var start = 0;
var scribble = new Scribble();


class Punt{
  constructor(x, y){
      this.x = x;
    this.y = y;
    
  }
  
    moveOne(){
      var a = (sin(start+1000)*100);
      var b = (cos(start+1000)*100);
    this.x = (a+(cos(start*10))*100);
    this.y = (b+(sin(start*10))*100);
    start += 0.01;
  }
  
  show(){
    scribble.bowing = 4;
    scribble.roughness = 4;
    colorMode(HSB);
    stroke(200, 80, 40);
    strokeWeight(0.4);
    scribble.scribbleLine(this.x, this.y, windowWidth, windowHeight);   
  }
  

  
}