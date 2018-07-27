var request = require('request');

module.exports = function(app){
  app.get('/login', function(req, res){
    if (req.session.currentUser){
      res.redirect('profile')
    }else{
      res.render('join', {auth: 'login'})
    }
  })

  app.get('/signup', function(req, res){
    if (req.session.currentUser){
      res.redirect('profile')
    }else{
      res.render('join', {auth: 'signup'})
    }
  })

  app.get('/profile/change-password', function(req, res){
    if (req.session.currentUser){
      res.render('profile', {currentUser: req.session.currentUser, sub: 'change-password'})
    }else{
      res.redirect('/login')
    }
  })

  app.get('/forgotten', function(req, res){
    res.render('forgotten')
  })
}
