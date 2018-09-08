const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const products = require('./routes/api/products');

// allow promises
mongoose.Promise = global.Promise;

// app init
const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(require('helmet')());
app.use(require('cors')());

// database configuration
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose
.connect(db, {useNewUrlParser: true}) 
.then( () => console.log('MongoDB connection established.'))
.catch( err => console.log(err))

// routes
app.use('/api/products', products);

// production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));
  
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${ PORT }`));