const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/commit_event', (req, res) => {
  res.send({ express: 'hello from commit event' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
