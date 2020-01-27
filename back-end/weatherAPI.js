var express = require('express');
var app = express();

const fetch = require('node-fetch');
const cors = require('cors');

app.use(cors())  

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/weather', (req,res) => {
    let key = '70f4c64df020d0bc9332bdfc3adb0d70';
    let {cityID} = req.query

    console.log(cityID)
    let responseJson = {'main': '',
                      'description': '',
                      'iconURL': '',
                      'temp': '',
                      'feels_like': '',
                      'wind': ''
                    }

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + key, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => {
      responseJson.main = json.weather[0].main;
      responseJson.description = json.weather[0].description;
      responseJson.iconURL = `http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
      responseJson.temp = json.main.temp;
      responseJson.feels_like = json.main.feels_like;
      responseJson.wind = json.wind.deg;

      res.send(responseJson)
    })        
    .catch(err => console.log(err))
})

app.listen(3000, function () {
  console.log('Weather on port 3000!');
});
