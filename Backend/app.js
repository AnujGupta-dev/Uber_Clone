require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const app = express();  
const cookieParser = require('cookie-parser');
const routes = require('./routes/user.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

require('./db/db').dbconnect();

app.get('/', (req, res) => {    
    res.send('Hello World!');  
});

app.use('/users', routes);

module.exports = app;