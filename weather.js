let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう

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



let a = document.querySelector('#kensaku');
a.addEventListener('click', greeting);

function greeting() {
    let i = document.querySelector('input[name="namae"]');
    let namae = i.value;      
    console.log(i.value);
}



