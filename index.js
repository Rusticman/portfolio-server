const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const NewEmail = require('./email_controller');

app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: "*/*" }));

app.post('/email', NewEmail);

app.post('/fire', (req,res) => {
  return console.log('firing up');
})


  const port = process.env.PORT || 3000;
  const server = http.createServer(app);
  server.listen(port);
  console.log('server listening on',port);
