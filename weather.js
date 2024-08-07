////////// 課題3-2 ここからプログラムを書こう
let n = 0;

function print (data) {
console.log(data.name); 
console.log(data.weather[0].description); 
console.log(data.main.temp_max);
console.log(data.main.temp_min); 
console.log(data.main.humidity); 
console.log(data.wind.speed);
console.log(data.wind.deg);
console.log(data.coord.lon); 
console.log(data.coord.lat);


let div = document.querySelector('div#result'); 
let p = document.createElement('p');
p.textContent = data.name;
div.insertAdjacentElement('beforeend', p);

let p2 = document.createElement('p');
p2.textContent = "天気: "+data.weather[0].description;
p.insertAdjacentElement('afterend', p2);

let p3 = document.createElement('p');
p3.textContent = "最高気温: "+data.main.temp_max;
p2.insertAdjacentElement('afterend', p3);

let p4 = document.createElement('p');
p4.textContent = "最低気温: "+data.main.temp_min;
p3.insertAdjacentElement('afterend', p4);

let p5 = document.createElement('p');
p5.textContent = "湿度: "+data.main.humidity;
p4.insertAdjacentElement('afterend', p5);

let p6 = document.createElement('p');
p6.textContent = "風速: "+data.wind.speed;
p5.insertAdjacentElement('afterend', p6);

let p7 = document.createElement('p');
p7.textContent = "風向: "+data.wind.deg;
p6.insertAdjacentElement('afterend', p7);

let p8 = document.createElement('p');
p8.textContent = "緯度: "+data.coord.lon;
p7.insertAdjacentElement('afterend', p8);

let p9 = document.createElement('p');
p9.textContent = "緯度: "+data.coord.lat;
p8.insertAdjacentElement('afterend', p9);

}


let b = document.querySelector('button#print');
b.addEventListener('click', kensaku);


function kensaku() {

  let toshi = document.querySelector('select#toshi');
  let a = toshi.selectedIndex;

  let a2 = toshi.querySelectorAll('option');
  let a3 = a2.item(a);
  let id = a3.getAttribute('value');
  console.log('都市: '+ id);
}

b.addEventListener('click', sendRequest);

  // 通信を開始する処理
function sendRequest() {
  n = n+1;
  if (n > 1){
    clear();
  }

  let toshi = document.querySelector('select#toshi');
  let a = toshi.selectedIndex;

  let a2 = toshi.querySelectorAll('option');
  let a3 = a2.item(a);
  let id = a3.getAttribute('value');
  // URL を設定
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+id+'.json';

  // 通信開始
  axios.get(url)
      .then(showResult)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);      // 通信の最後の処理
}


// 通信が成功した時の処理
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  // data をコンソールに出力
  print(data);
  console.log(data);

  // data.x を出力
  console.log(data.x);
}

// 通信エラーが発生した時の処理
function showError(err) {
  console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
  console.log('Ajax 通信が終わりました');
}

function clear() {
  let div = document.querySelector('div#result');

  let p = div.querySelectorAll('p');
  for(let n of p){
    n.remove();
  }


}
