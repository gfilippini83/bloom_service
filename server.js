const express = require('express');
const cors = require('cors');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const streamerRoutes = require('./server/routes/streamerRouter');
const baseInfoRoutes = require('./server/routes/baseInfoRouter');

var fs = require('fs')
var https = require('https')

mongoose.connect(`mongodb://${process.env.MONGO_USR}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/bloom?authSource=admin`);


const app = express()
  .use(cors())
  .use(bodyParser.json())

app.use('/api/streamer', streamerRoutes);
app.use('/api/base-info', baseInfoRoutes);
// app.use(app.router);
// streamerRoutes.initialize(app)


https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

// app.listen(4201, (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   return console.log('My Node App listening on port 4201');
// });