const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
const passport = require("passport");
const mongoose = require('mongoose')
var cors = require('cors')
require('dotenv').config()

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product');
const detailRouter = require('./routes/detail')
const orderRouter = require('./routes/order')



const app = express();
const mongodConnect = process.env.MONGOLAB_URI

mongoose.connect(mongodConnect)

app.use(cors())
app.use(
  cors({
    origin: ["*"],
    methods: ["GET", "HEAD", "POST", "DELETE", "PUT", "PATCH", "OPTIONS"],
    credentials: false
  })
);
app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/public', express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/products', productRouter);
app.use('/details', detailRouter);
app.use('/orders', orderRouter);

module.exports = app;
