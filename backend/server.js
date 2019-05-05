const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');
const port = process.env.PORT || 7777;

//Создаем клиента
//const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
mongoose.connect("mongodb://localhost:27017/travell", { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use(express.static(path.join(__dirname, '../build')))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended: false}))
    //прописываем "прослойку" между фронтом и бэком
    .use('/api', router)
    //пересылаем все файлы, через главный индекс
    .use('*', r =>{
      r.res.sendFile(path.join(__dirname+'/../build/index.html'));
  })
    .listen(port, () => console.log(`Listening on port ${port}`))

