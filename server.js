const express = require('express');

const app = express();

app.use(express.static('./dist/basic-math'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/basic-math'});
});
