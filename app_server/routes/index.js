
var express = require('express');
var router = express.Router();
var ctrlHome = require('../controllers/home');
var ctrlBlogs = require('../controllers/blogs');

/* Setup routes to pages */
router.get('/', ctrlHome.home);
router.get('/blog-list', ctrlBlogs.list);
router.get('/blog-add', ctrlBlogs.add);
router.post('/blog-add', ctrlBlogs.addPost);
router.get('/blog-edit/:id', ctrlBlogs.edit);
router.post('/blog-edit/:id', ctrlBlogs.editPost);
router.get('/blog-delete/:id', ctrlBlogs.del);
router.post('/blog-delete/:id', ctrlBlogs.deletePost);
module.exports = router;
