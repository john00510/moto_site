const exec = require('child_process').exec;
const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.post('/commit_event', (req, res) => {
  var cmd = '/home/john/motosite/update.sh';
  var url = req.post('host') + req.originalUrl;

  if (url === '') {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        res.send({ express: stderr });
      } else {
        res.send({ express: stdout });
      }
    });
  } else {
    res.send({ express: 'validation error' });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
