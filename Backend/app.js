require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const app = express();  
const routes = require('./routes/user.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./db/db').dbconnect();

app.get('/', (req, res) => {    
    res.send('Hello World!');  
});

app.use('/users', routes);

module.exports = app;