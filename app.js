const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const logger = require('morgan');
const passport = require("passport");
const mongoose = require('mongoose')
const cors = require('cors')
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

app.use(cors());
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
app.use(express.static(path.join(__dirname, 'public')));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/categories', categoryRouter);
app.use('/product', productRouter);
app.use('/detail', detailRouter);
app.use('/order', orderRouter);

module.exports = app;
