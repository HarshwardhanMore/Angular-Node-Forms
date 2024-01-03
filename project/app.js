const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();

const allowedOrigins = [
    "http://localhost:4200"
  ];
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes'));

db.sequelize.sync().then(()=>{
    console.log('Models Sync Successfully')
}).catch((err)=>{  
    console.log('Unable to sync model', err)
});


module.exports = app;



