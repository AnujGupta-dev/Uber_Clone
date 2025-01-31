const mongoose = require('mongoose');

exports.dbconnect = ()=>{
    mongoose.connect(process.env.DB_URL )
    .then(() => console.log('Database connected!'))
    .catch(err => console.log(err));
}