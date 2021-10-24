// 小手調べ

function setup(){

for(let i = 0; i < 10; i++){
noFill();
if(i < 4){
stroke(0,0,255)
ellipse(50,50,i*5+10)
}
else{
  stroke(255,0,0)
  ellipse(50,50,i*5+10)
}
  // BLANK[1]
}
}
