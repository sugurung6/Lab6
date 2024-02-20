exports.getHomePage = (req, res) => {
  res.render('home', { title: 'Your Name Blog Site' });
};

exports.getBlogListPage = (req, res) => {
  res.render('blogList', { title: 'Blog List' });
};

exports.getBlogAddPage = (req, res) => {
  res.render('blogAdd', { title: 'Blog Add' });
};
