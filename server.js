const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');

require('dotenv').config();
require('./config/database');

const tasks = require('./routes/tasks');

const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/', groceriesRouter);

app.listen(port, function() {
    console.log(`Express is listening on port:${port}`)
});