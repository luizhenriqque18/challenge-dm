const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();
console.log(nomeApp);
app.use(express.static(`./dist/${nomeApp}/`));

app.get('/*', (req, res) => {
  res.sendFile('index.html', {root: `dist/${nomeApp}/`});
});

app.listen(process.env.PORT || 8080);