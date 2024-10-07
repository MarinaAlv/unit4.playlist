const express = require('express');
const app = express();
const PORT = 3000;
const playlist = require('./playlist');

app.get('/', (req, res) => {
  res.send("You've reached the Playlist API!");
});

app.get('/playlist', (req, res) => {
  res.json(playlist);
});

app.get('/playlist/:index', (req, res) => {
  const {index} = req.params;
  if (index < 0 || index >= playlist.length) {
    res.status(404).send('That song does not exist in the playlist.');
  } else {
    res.json(playlist[index]);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
