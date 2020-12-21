const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const streamerRoutes = require('./server/routes/streamerRouter');
const baseInfoRoutes = require('./server/routes/baseInfoRouter');

mongoose.connect(`npm `);


const app = express()
  .use(cors())
  .use(bodyParser.json())

app.use('/api/streamer', streamerRoutes);
app.use('/api/base-info', baseInfoRoutes);
// app.use(app.router);
// streamerRoutes.initialize(app)

app.listen(4201, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log('My Node App listening on port 4201');
});