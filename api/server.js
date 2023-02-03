const express = require('express');
const cors = require('cors');
const app = express();



// Enable cors security headers
app.use(cors())

// add an express method to parse the POST method
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('api home')
});


app.get('/test', (req, res) => {
  res.send('api test')
});



app.listen('3001', () => {console.log("server run 3001") })