var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('board/index', { title: '게시판 제목' });
});

router.get('/:id', function(req, res){
  res.render('board/view', { title: '게시판 보기' });
});

router.get('/reg', function(req, res, next) {
  res.render('board/reg', { title: '게시판 보기' });
});


module.exports = router;