const axios = require('axios');

// EXEMPLE

// requete une la base de donnes avec login + password afin de recuperer un token (jwt : json web token)
axios.post('https://gql.alcyone.life/auth/local', {
        identifier: 'itakad@gmail.com',
        password: 'itakad2020',
    })
    .then(function (response) {

        console.log(response.data) // handle success

        // recuperer jwt pour joindre a une requete authentifier
        let jwt = response.data.jwt

        // construire bearer auth token a joindre avec la requete
        console.log(`Bearer ${response.data.jwt}`)

        // recuperer la liste des categories disponibles en base de donnees
        axios.get('https://gql.alcyone.life/categories', // https://gql.alcyone.life/categories?id=7 Pour une seule catégorie
            { headers: { Authorization: `Bearer ${jwt}` }
        }).then(function (response) {
            console.log(response.data)
        })
        .catch(function (error) {
            console.log('error') // handle error
        })
        .then(function () {
        console.log('--- --- ---')
        })
    })
    .catch(function (error) {
        console.log('error') // handle error
    })
    .then(function () {
        console.log('--- --- ---')
    });