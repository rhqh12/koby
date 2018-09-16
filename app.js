var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var flash = require('connect-flash');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
//정적 파일을 제공하는 데 영향을 끼치지 않는 json, urlencoded,cookie-parser를 거치는 것은 낭비
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  resave:false, //요청이 왔을 때 세션에 수정사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정
  saveUninitialized:false, //세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정 [보통 방문자 추적할 때 사용]
  secret: 'secret code', //비밀키와 같은 역할
  cookie:{ //세션 관리 시 클라이언트에 쿠키를 보내는데 이를 세션 쿠키라고 함
    httpOnly:true, //클라이언트에서 쿠키를 확인할 때
    secure:false, //https가 아닌 환경에서도 사용할 수 있게 [배포시에는 https를 적용하고 true로 설정하는게 좋음]
  },
}));
app.use(flash()); //req.flash 메서드를 추가함. req.flash(키, 값)으로 해당 키에 값을 설정하고 ..

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board', boardRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;