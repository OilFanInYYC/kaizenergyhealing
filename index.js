'use strict';

const express = require('express');
const app = express();
const port = 5000;

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/collab', (req, res) => {
  res.render('collab');
});

app.listen(port, () => {
  console.log(`Example app is listening on port ${port}`);
});