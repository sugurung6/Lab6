
exports.getHome = (req, res) => {
  res.render('home', {
    title: 'Sujan Gurung Blog Site',
    introduction: 'Welcome to my blog site!'
  });
};
