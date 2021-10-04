// require est un mot clef necessaire pour importer un paquet
const Koa = require('koa');

// acceder aux params depuis le contexte
const koaBody = require('koa-body');

// declarer un router pour avoir plusieurs routes
const Router = require('koa-router');

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