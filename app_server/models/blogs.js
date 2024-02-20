const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Blog', blogSchema);
