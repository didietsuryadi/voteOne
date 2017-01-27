var express = require('express');
var router = express.Router();
var models = require("../models")

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.login == true){
    models.Program.findAll({raw: true}).then(function(program){
      models.Komentar.findAll({raw: true}).then(function(komentar){
    res.render('pages/rcti', { title : "Welcome | Rajawali Citra Televisi", result : program, comment : komentar});
    })
    })
  }else{
    res.render('pages/login',{title : "Welcome | Login"});
  }
});

router.post('/addcomment', function(req, res, next) {
  models.Komentar.create({isi_komentar: req.body.comment}).then(function (data) {
    res.redirect('/rcti')
  })
});

router.get('/upvote/:id', function(req, res, next) {
  models.Program.findById(req.params.id).then(function (data) {
    data.update({vote : data.vote + 1})
    res.redirect('/rcti')
  })
});

router.get('/downvote/:id', function(req, res, next) {
  models.Program.findById(req.params.id).then(function (data) {
    data.update({vote : data.vote - 1})
    res.redirect('/rcti')
  })
});


module.exports = router;
