const express = require('express');
const app = express();

module.exports = app;

const homeController = require('./controllers/homeController');
const blogController = require('./controllers/blogController');

app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Define routes
app.get('/', homeController.getHome);
app.get('/blog/list', blogController.getBlogList);
app.get('/blog/add', blogController.getBlogAdd);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
