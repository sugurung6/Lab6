const mongoose = require('mongoose');

// Example connection string
const uri = 'mongodb://localhost:27017/mydatabase';

// Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.error('Error connecting to MongoDB:', error));
