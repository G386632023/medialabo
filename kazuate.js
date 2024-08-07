let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b1 = document.querySelector('button#print');
b1.addEventListener('click', hantei);

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let kazu = document.querySelector('input[name="seisu"]');
  let s = kazu.value;
  let yoso = Number(s);

  kaisu = kaisu+1;
    // 課題3-1: 正解判定する
  let a = document.querySelector('span#kaisu');
  a.textContent = kaisu; 
  
  let b = document.querySelector('span#answer');
  b.textContent = yoso;
  
  // kotae と yoso が一致するかどうか調べて結果を出力
  let c = document.querySelector('p#result');
  if (yoso===kotae && kaisu >= 2){
      c.textContent =('答えは '+kotae+' でした．すでにゲームは終わっています');
  }else if (yoso===kotae){
      c.textContent =('正解です．おめでとう!');
  }else if (yoso>kotae){
      c.textContent =('まちがい．答えはもっと小さいですよ');
  }else if (yoso<kotae){
      c.textContent =('まちがい．答えはもっと大きいですよ');
  }
  // 課題3-1における出力先はコンソール
}