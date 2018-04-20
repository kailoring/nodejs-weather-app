let request = require('request');

let apiKey = '170680ea97f6dfe138154e0a34223b1f';
let city = 'summerville';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});
