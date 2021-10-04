// require est un mot clef necessaire pour importer un paquet
const Koa = require('koa');

// const auth = require('koa-basic-auth');

// rendre disponbile pour d'autres fichiers l'applicatin koa 
const app = module.exports = new Koa();

const koaBody = require('koa-body');
app.use(koaBody({ multipart: true }));

// app.use(auth({ name: 'tj', pass: 'tobi' }));

// declaration et utilisation d'une fonction qui retournera Hello-World
app.use(async function(ctx) {
  // ctx.body c'est le contenu
  const body = ctx.request.body;
  console.log(body);
  ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
  
  if (false) {
    // ctx.body = 'Hello-World-Test2';
  }
  else {
    // ctx.body = 'Faux';
  }
  
});

// demarrer l'application
if (!module.parent) app.listen(3000);