import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from '../src/configs/viewEngine';
import webRoute from '../src/routes/web';
import connectDB from '../src/configs/connectDB';
const expressLayouts = require('express-ejs-layouts');
const ApiRoutes = require('./routes/api');
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
app.use('/api', ApiRoutes.routes);

viewEngine(app);
webRoute(app);
connectDB();
let port = process.env.PORT || 8080;
console.log(port);
app.listen(port, () => {
    console.log('http://localhost:' + port);
});
