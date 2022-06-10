const express = require('express');
const path = require('path');

const app = express();

const joinedPath = path.join(__dirname, 'public');
console.log(joinedPath);

const staticFiles = express.static(joinedPath);

app.use(staticFiles);

app.listen(3000, () => {
  console.log('listening on port 3000..');
});
