const mongoose = require("mongoose");

// Define a schema for your MongoDB document
const dataSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: true,
  },
  Kapha: {
    type: Number,
    required: true,
  },
});

// Export the schema
module.exports = dataSchema;
