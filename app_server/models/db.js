const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://blogs:<your_password>@localhost:27017/<your_database_name>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

module.exports = mongoose;
