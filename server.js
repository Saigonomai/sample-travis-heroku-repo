/* server.js main file */
const express = require('express');
const path = require('path');

const app = express();

var PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('req = \n', req);
  res.send('Test CI with Travis');
  // res.sendFile(path.join(__dirname, "index.html"));
});

const server = app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('app running on port 3001');
});

// eslint-disable-next-line no-console
console.log('server = ', server);

module.exports = server;
