// schema.js

const mongoose = require('mongoose');

// Define the schema for the user collection
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Create a model for the user collection using the schema
const User = mongoose.model('user', userSchema);

// Export the model to use in other parts of your application
module.exports = User;
