const axios = require('axios');

// get hello-world
axios.get('http://localhost:3000/hello-world/')
    .then(function (response) {
    console.log(response.data); // handle success
    })
    .catch(function (error) {
        console.log('error'); //handle error 
    })
    .then(function () {
        console.log('--- --- ---');
    });