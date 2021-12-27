// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;

  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
console.log(i,j);
if((i+j)%2==1){
fill(150);
}
else{
noFill();}
rect(size*i,size*j,size,size);    // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    //}
  //}　　　　　　　　　//iとjの条件分岐はここで終了→forの関数は最下層まで反映する必要がある
if((i+j)%2==1 && j<3){
fill(255,0,0)
circle(size*i+size*1/2,size*j+size*1/2,size*10/11);
} //赤のポッチが置かれる条件
//else if((i+j)%2==1 && 2<j<5){
//noFill();
//noStroke();
//}
//中央の条件は結局のところ何もしないからスルーでOK
else if((i+j)%2==1 && 4<j){
fill(0)
circle(size*i+size*1/2,size*j+size*1/2,size*10/11);
}


}
}
}
