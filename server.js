const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//Database configuration
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
    .connect(db) 
    .then( () => console.log('MongoDB connection established.'))
    .catch( err => console.log(err))

//Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));