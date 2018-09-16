var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '게시판 제목' });
});

router.get('/view', function(req, res, next) {
  res.render('view', { title: '게시판 보기' });
});

router.get('/reg', function(req, res, next) {
  res.render('view', { title: '게시판 보기' });
});


module.exports = router;