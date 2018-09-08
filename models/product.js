const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  photo: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
}  
});

module.exports = mongoose.model('Products', productSchema);