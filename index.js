console.log('Hello world!!!')
const express = require('express');
const expressApplication = express();
expressApplication.get('/', (request, response) => {
  response.send('Hello world!');
});
expressApplication.listen(1337, () => {
  console.log('Application is now listening to HTTP requests...');
  console.log('Press CTRL+C to stop.');
});
