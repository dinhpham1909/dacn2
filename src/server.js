import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from '../src/configs/viewEngine';
import webRoute from '../src/routes/web';
import connectDB from '../src/configs/connectDB';
const expressLayouts = require('express-ejs-layouts');
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);

viewEngine(app);
webRoute(app);
connectDB();
let port = process.env.PORT || 8080;
console.log(port);
app.listen(port, () => {
    console.log('http://localhost:' + port);
});
