require('@babel/register');
const app = require('./app');
app
  .getMapping()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
