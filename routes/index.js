var express = require('express');
var router = express.Router();
var tweets= [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Twitter' ,tweets: tweets});
});


router.post('/', function(req, res, next) {
if (req.body.tweet != '')
  {var now=new Date();
  var day=now.getDate();
  var month=now.getMonth()+1;
  var year=now.getFullYear();
  var hour=now.getHours();
  var minutes=now.getMinutes();
  tweets.unshift({tweet:req.body.tweet,jour:day,mois:month,an:year,heure:hour,minute:minutes});}
  res.redirect('/')
});


module.exports = router;
