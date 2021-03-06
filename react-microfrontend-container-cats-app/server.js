const chalk = require('chalk');
const ip = require('ip');
const http = require('http');
const express = require('express');
const path = require('path');
const app = express();

console.log('[server start]', __dirname);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const httpServer = http.createServer(app);
const PORT = 3002;
httpServer.listen(PORT, () => {
  console.log(
    `${chalk.yellow('http://')}${chalk.blue(`${ip.address()}`)}${chalk.green(
      `:`
    )}${chalk.red(`${PORT}`)}`
  );
});
