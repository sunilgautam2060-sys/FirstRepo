const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(8000, () => {
  console.log('Server running at http://localhost:8000');
});
