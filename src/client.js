// Bibliothèque de requete HTTP
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
        console.log('--- --- ---'); // always executed
    }
);

// // parse object
//   axios.post('http://localhost:3000/body-parser-object/', {login: 'test', password: 'pwd' })
//     .then(function (response) { 
//       console.log(response.data)
//     })
//     .catch(function (error) { 
//       console.log('error')
//     })
//     .then(function () {
//       console.log('--- --- ---')
//     });





// // parse object and add params :id
// axios.put('http://localhost:3000/body-parser-object/1', {login: 'test', password: 'pwd' })
//   .then(function (response) { 
//     console.log(response.data)
//   })
//   .catch(function (error) { 
//     console.log('error')
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });


// parse object and convert to string
// axios.post('http://localhost:3000/body-parser-string/', {login: 'test', password: 'pwd' })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log('error');
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });


// parse object and convert to string
// axios.post('http://localhost:3000/authentification-to-db/', 
//   {login: 'itakad@gmail.com', password: 'itakad2020' })
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.log('error')
//     // console.log(error);
//   })
//   .then(function () {
//     console.log('--- --- ---')
//   });

// parse object and convert to string
axios.post('http://localhost:3000/authentification-to-db/', {login: 'itakad@gmail.com', password: 'itakad2020' })
  .then(function (response) {
    console.log(response.data);
        axios.get(`http://localhost:3000/get-db-collection/categories/cryptomonnaie?jwt=${response.data.jwt}`)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log('error');
        })
        .then(function () {
            console.log('--- --- ---')
        });
  })
  .catch(function (error) {
    console.log('error');
  })
  .then(function () {
    console.log('--- --- ---')
  });

axios.get('http://localhost:3000/get-db-collection/categories')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log('error');
  })
  .then(function () {
    console.log('--- --- ---')
  });

