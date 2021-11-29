// 最終課題を制作しよう
//function setup(){
//  createCanvas(windowWidth, windowHeight);
let img,img2,x,y,dx,dy,dw,dh,sx,sy,sw,sh,notcatched,catched;
let por = [];

function preload() {
img1 = loadImage('Said ver3.jpg');
img3 = loadImage('Foucault.jpg');
img4 = loadImage('Rene Descartes.jpg');
img5 = loadImage('Aristotle.jpg');
//document.write('<img src="Said ver3.jpg">')     非推奨らしい
}
function setup(){
createCanvas(1000,1000);
catched = false;
notcatched = true;
for(let z = 0; z<1000 ; z = z + 10)
guidelines(z,0,1000)
//初期設定として以下4行
//image(img, 10, 100,30,40,0,0,100,100); //左上
//image(img, 110, 200,30,40,100,100,100,100);//右下
//image(img, 110, 100,30,40,100,0,100,100);//右上
//image(img, 10, 200,30,40,0,100,100,100);//左下
//実験　配列として運用
let lh1 = {img2:img1,dx:random(20,700),dy:100,dw:60,dh:80,sx:0,sy:0,sw:100,sh:100,notcatched:true,catched:false}
por.push(lh1);
let rl1 = {img2:img1,dx:110,dy:200,dw:60,dh:80,sx:100,sy:100,sw:100,sh:100,notcatched:true,catched:false}
por.push(rl1);
let rh1 = {img2:img1,dx:60,dy:750,dw:60,dh:80,sx:100,sy:0,sw:100,sh:100,notcatched:true,catched:false}
por.push(rh1);
let hl1 = {img2:img1,dx:560,dy:random(400,500),dw:60,dh:80,sx:0,sy:100,sw:100,sh:100,notcatched:true,catched:false}
por.push(hl1);
for(let i = 0; i < por.length; i++){
const h = por[i];
image(h.img2, h.dx, h.dy,h.dw,h.dh,h.sx,h.sy,h.sw,h.sh,h.notcatched,h.catched)
}
let lh3 = {img2:img3,dx:210,dy:300,dw:60,dh:80,sx:0,sy:0,sw:100,sh:100,notcatched:true,catched:false}
por.push(lh3);
let rl3 = {img2:img3,dx:350,dy:random(70,500),dw:60,dh:80,sx:100,sy:100,sw:100,sh:100,notcatched:true,catched:false}
por.push(rl3);
let rh3 = {img2:img3,dx:910,dy:800,dw:60,dh:80,sx:100,sy:0,sw:100,sh:100,notcatched:true,catched:false}
por.push(rh3);
let hl3 = {img2:img3,dx:random(0,100),dy:400,dw:60,dh:80,sx:0,sy:100,sw:100,sh:100,notcatched:true,catched:false}
por.push(hl3);
for(let i = 0; i < por.length; i++){
const j = por[i];
image(j.img2, j.dx, j.dy,j.dw,j.dh,j.sx,j.sy,j.sw,j.sh,j.notcatched,j.catched)
}
let lh4 = {img2:img4,dx:random(150,900),dy:200,dw:60,dh:80,sx:0,sy:0,sw:100,sh:100,notcatched:true,catched:false}
por.push(lh4);
let rl4 = {img2:img4,dx:100,dy:100,dw:60,dh:80,sx:100,sy:100,sw:100,sh:100,notcatched:true,catched:false}
por.push(rl4);
let rh4 = {img2:img4,dx:210,dy:700,dw:60,dh:80,sx:100,sy:0,sw:100,sh:100,notcatched:true,catched:false}
por.push(rh4);
let hl4 = {img2:img4,dx:random(400,450),dy:460,dw:60,dh:80,sx:0,sy:100,sw:100,sh:100,notcatched:true,catched:false}
por.push(hl4);
for(let i = 0; i < por.length; i++){
const k = por[i];
image(k.img2, k.dx, k.dy,k.dw,k.dh,k.sx,k.sy,k.sw,k.sh,k.notcatched,k.catched)
}
let lh5 = {img2:img5,dx:490,dy:random(850,900),dw:60,dh:80,sx:0,sy:0,sw:100,sh:100,notcatched:true,catched:false}
por.push(lh5);
let rl5 = {img2:img5,dx:270,dy:170,dw:60,dh:80,sx:100,sy:100,sw:100,sh:100,notcatched:true,catched:false}
por.push(rl5);
let rh5 = {img2:img5,dx:random(600,750),dy:250,dw:60,dh:80,sx:100,sy:0,sw:100,sh:100,notcatched:true,catched:false}
por.push(rh5);
let hl5 = {img2:img5,dx:610,dy:670,dw:60,dh:80,sx:0,sy:100,sw:100,sh:100,notcatched:true,catched:false}
por.push(hl5);
for(let i = 0; i < por.length; i++){
const l = por[i];
image(l.img2, l.dx, l.dy,l.dw,l.dh,l.sx,l.sy,l.sw,l.sh,l.notcatched,l.catched)
}
}
//これより下はクリックしたときに動かせるようにしたい
function guidelines(a,b,c) { //この行とその下の行でガイドライン（縦線を描画）を作成する自作の関数
line(a,b,a,c); //縦線
line(b,a,c,a); //横線
rect(0,0,1000,50);
rect(0,50,1000,20);
textSize(49);
textFont("serif");
text("2020年度　倫理学", 0, 45);
textSize(20);
text("Edward Wadie Said                   　　　       Rene Descartes      Aristotle", 30, 68);
//function draw(){
//background(247,255,254);
//for(let i = 0; i < por.length; i++){
//if(por[i].notcatched){image(h.img2, h.dx, h.dy,h.dw,h.dh,h.sx,h.sy,h.sw,h.sh,h.notcatched,h.catched)}
  // }
 //}
 //function mousePressed(){
  //for(let i = 0; i < por.length; i++){
  //if(catched = por[i].dist(mouseX, mouseY, h.dx, h.dy) < 30){
    //  function mouseDragged(){
      //  for(let i = 0; i < por.length; i++){
        //if(por[i].catched){
        //h.dx = mouseX;
        //h.dy = mouseY;
         //}
        //}
       //}
    //}
 //}
//}
}
