// Import necessary modules
const express = require('express');
const router = express.Router();

// Import your controllers
const blogController = require('../controllers/blogController');

// Define routes
router.get('/', function(req, res) {
    // Render the home page view
    res.render('home', { title: 'Your Name Blog Site' });
});

router.get('/blogs', function(req, res) {
    // Render the blog list page view
    res.render('blogList', { title: 'Blog List' });
});

router.get('/blogs/add', function(req, res) {
    // Render the blog add page view
    res.render('blogAdd', { title: 'Blog Add' });
});

// Export the router
module.exports = router;
