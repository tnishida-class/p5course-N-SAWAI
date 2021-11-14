// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(windowWidth, windowHeight);
  //createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46");
}
function balloon(t){
let a =  random(10,windowWidth-120 && windowHeight-120)
 noStroke()
 fill(221,226,235);
 square(a,a,120,5);
 fill(123,23,231);
 text(t,a+3,a+60);
 fill(221,226,235);
 triangle(a+117, a+120, a+117, a+100, a+137, a+120);
// 以下ひな壇
//function balloon(t){
  //let w = textWidth(t);
  //let h = textAscent() + textDescent();
  //let p = 2;

  //fill(0);
  //rect(0, 0, w + p * 2, h + p * 2);
  //fill(255);
  //text(t, p, h + p);
}
