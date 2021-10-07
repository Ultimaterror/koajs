// require est un mot clef necessaire pour importer un paquet
const Koa = require('koa');

// acceder aux params depuis le contexte
const koaBody = require('koa-body');

// declarer un router pour avoir plusieurs routes
const Router = require('koa-router');

// Bibliothèque de requete HTTP
const axios = require('axios');

// rendre disponbile pour d'autres fichiers l'applicatin koa 
// Declare Main Application
const app = module.exports = new Koa();

app.use(koaBody({ multipart: true }));

// Declare Router
var router = new Router();

// add route get to Router
router.get('/hello-world', (ctx, next) => {
    ctx.body = 'Hello-World'
})

router.post('/body-parser-object/', (ctx, next) => {
    ctx.body = ctx.request.body
})

router.put('/body-parser-object/:id', (ctx, next) => {
    ctx.request.body.id= ctx.params.id
    ctx.body = ctx.request.body
})

//
router.post('/body-parser-string/', (ctx, next) => {
    ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
})

router.post('/authentification-to-db/',  async (ctx, next) => {
    
    // on recupere les elements distincts
    // ctx.request.body = { identifier: 'itakad@gmail.com', password: 'itakad2020' }
    let login = ctx.request.body.login
    let password = ctx.request.body.password

    // declare une variable pour le json web token (jwt)
    var jwt = null

    // si les login et password sont correct je recupere un jwt
    // await : attends que la fonction se finisse avant de faire la suite (async)
    await axios.post('https://gql.alcyone.life/auth/local', {
        identifier: login,
        password: password,
    })
    .then(response => {
        // console.log(response.data) // handle succes
        // extraction du jwt de la reponse
        jwt = response.data.jwt
    })
    .catch(function (error) {
        console.log('error') // handle error
    })
    .then(function () {
        console.log('--- --- ---')
    });
    // affichage jwt
    console.log(jwt)
    // je retourne un object avec le jwt
    ctx.body = {jwt: jwt}
})

router.get('/get-db-collection/:collection', async (ctx, next) => {
    // recuperer en parametre :collection
    let collection = ctx.params.collection;
    console.log(collection);

    // ensuite requeter la base de donnee
    await axios.get(`https://gql.alcyone.life/${collection}`)
        .then(function (response) {
            console.log(response.data)
            collection = response.data
        })
        .catch(function (error) {
            console.log('error')
        })
        .then(function () {
        console.log('--- --- ---')
        }
    )
    // return content of collection
    ctx.body = collection;
})

router.get('/get-db-collection/:collection/:name', async (ctx, next) => {
    // recuperer en parametre :collection, :name et le jwt
    let category = ctx.params.name;
    let collection = ctx.params.collection;
    let jwt = ctx.query.jwt;    

    console.log(category)
    // ensuite requeter la base de donnee
    await axios.get(`https://gql.alcyone.life/${collection}?slug=${category}`, { headers: { Authorization: `Bearer ${jwt}` }})
        .then(function (response) {
            console.log(response.data)
            category = response.data.name
            
        })
        .catch(function (error) {
            console.log('error')
        })
        .then(function () {
        console.log('--- --- ---')
         }
    )
    // return content of category
    ctx.body = category;
})


// app.use(async function(ctx) {
//   // ctx.body c'est le contenu
//   const body = ctx.request.body;
//   console.log(body);
//   ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
// });

// demarrer l'application
if (!module.parent) {
    app
        .use(router.routes()) // Specify we use a router
        .use(router.allowedMethods()) // All because no specification
        .listen(3000) // localhost:3000/
}