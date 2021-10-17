// 練習問題：神戸市のマーク
function setup(){
  createCanvas(1000, 200);
  background(255);

  // 空欄を埋めて神戸市のロゴマークを完成させよう
  noFill();
  strokeWeight(25);
  strokeCap(SQUARE);
  stroke(22,131,46);
  arc(100 + 25, 100, 100, 100, QUARTER_PI * 3, QUARTER_PI * 3 + PI);
  stroke(22,131,46);
  arc(100 - 25, 100, 100, 100, QUARTER_PI * 5, QUARTER_PI * 5 + PI);
  // BLANK[1]

  // おまけ：神戸大学のロゴを作りたい人向けに色情報だけ置いておきます
  noStroke()
  fill(14,47,146);
  circle(400,100,100);
  noStroke();
  fill(255,255,255);
  circle(395,96,95);
  noStroke();
  fill(22,131,46);
  circle(390,95,95)
  noStroke();
  fill(255,255,255);
  circle(389,99,88);
  fill(77);
  textSize(23);
  text("KOBE",360,90);
  fill(77);
  textSize(10);
  text("UNIVERSITY",370,105)

  const red = color(196, 0, 0);
  const blue = color(14, 47, 146);
  const green = color(22, 131, 46);
  const gray = color(77);
}
