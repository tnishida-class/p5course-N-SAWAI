// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(500, 500);
  count = 0;
  cycle = 200;
}
function windowResized(){ // ウィンドウがリサイズされるたびにこの関数が自動的に実行される
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;   //原型　余りであるからサイクルは200であることに留意
 //count = (count + 1 ); //カウントを1秒ずつ増やしていってあまりで分類
  // BLANK[1]

  if(count < 100){
    ellipse(width / 2, height / 2, count+100);
    }
  else{
    ellipse(width / 2, height / 2, 200-(count-100)); //count=100の時に半径は200になる

  }

//  ellipse(width / 2, height / 2, size);　//原型

}
