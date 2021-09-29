var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET home page. */
router.get('/Home_Page', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

router.get('/About_Me', function(req, res, next) {
  res.render('index', { 
    title: 'About'
  });
});
router.get('/Projects_Page', function(req, res, next) {
  res.render('index', { 
    title: 'Projects'
  });
});
router.get('/Services_Page', function(req, res, next) {
  res.render('index', { 
    title: 'Services'
  });
});
router.get('/Contact_Me', function(req, res, next) {
  res.render('index', { 
    title: 'Contact'
  });
});
module.exports = router;
