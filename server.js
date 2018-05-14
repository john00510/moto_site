/* const exec = require('child_process').exec; */
import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/cdn/*', (req, res) => {
  let name = req.url.split('/').pop();
  res.sendFile(path.join(__dirname, `images/${name}`));
});

app.get('/api/*', (req, res) => {
  res.status(200).json({status: "OK"});
});

app.post('/commit_event', (req, res) => {
  var cmd = '/home/john/motosite/update.sh';

  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      res.send({ express: stderr });
    } else {
      res.send({ express: stdout });
    }
  });
});

app.listen(3001, () => console.log(`Listening on port 3001`));
