var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash')
var models = require('../models')


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.login == true){
    res.render('pages/home',{title : "Welcome | Home"});
  }else{
  res.render('pages/login',{title : "Welcome | Login"});
  }
});

router.get('/home', function(req, res, next) {
  if(req.sesion.login == true){
    res.render('pages/home',{title : "Welcome | Home"});
  }else{
    redirect('/')
  }
});

router.get('/register', function(req, res, next) {
  res.render('pages/register',{title : "Welcome | Register"});
});

router.get('/votepage', function(req, res, next) {
  res.render('pages/votepage',{title : "Welcome | Register"});
});

router.post('/valid', function(req, res, next) {
  models.User.findOne({
    where:{
      username: req.body.username
    }
  }).then(function(data){

    if(passwordHash.verify(req.body.password, data.password) == true){
      req.session.login = true;
      res.redirect('/')
    }else{
      res.redirect('/')
    }
  }).catch(

  )
});

router.post('/signup', function(req, res, next) {
  models.User.create({
    username: req.body.username,
    password: passwordHash.generate(req.body.password),
    email: req.body.email,
    role: "user"
  }).then(
    res.redirect('/')
  )
});

router.get('/logout', function(req, res, next){
  req.session.destroy()
  res.redirect('/')

});


module.exports = router;
