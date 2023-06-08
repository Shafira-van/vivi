const express = require('express');
const bodyParser = require('body-parser');
const routes = require('../backend-api/routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server berjalan pada port', port);
});