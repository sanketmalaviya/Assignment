const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://countries-states-cities-dataset.p.rapidapi.com/list-countries-states-cities',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'countries-states-cities-dataset.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});