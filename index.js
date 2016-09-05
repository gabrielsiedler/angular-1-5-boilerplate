const express = require('express');
const path = require('path');

const app = express();

// Prohibit user to access sass folder
app.use('/', (req, res, next) => {
  const isSass = req.url.match(/^sass\/$/);
  if (isSass) {
    return res.sendStatus(403);
  }

  return next();
});
app.use('/', express.static(path.join(__dirname, 'client')));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/angular')));

app.listen(8000);
