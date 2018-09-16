var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('portfolio/index', { title: '보고 또 보고 포트폴리오' });
});
module.exports = router;