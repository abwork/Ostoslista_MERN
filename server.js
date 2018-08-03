const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Database configuration
const db = require('./config/keys').mongoURI;

const port = process.env.PORT || 8000;

//Connect to Mongo
mongoose
    .connect(db, {useNewUrlParser: true}) 
    .then( () => console.log('MongoDB connection established.'))
    .catch( err => console.log(err))

//Use Routes
app.use('/api/items', items);

app.listen(port, () => console.log(`Server running on port ${port}`));