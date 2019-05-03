
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const path         = require('path');

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    require("./seeds");
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

const index = require('./routes/index');
const movies = require('./routes/movies')
const productDetails = require('./routes/details')
app.use('/', index);
app.use('/', movies);
app.use('/', productDetails);


app.listen(3000, (err)=> {
  console.log("listening")
})

module.exports = app;