var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About'
  });
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { 
    title: 'Projects'
  });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { 
    title: 'Services'
  });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact'
  });
});

/* GET Route for displaying the Login page. */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page. */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page. */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page. */
router.post('/register', indexController.processRegisterPage);

/* GET Route to perform user Logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
