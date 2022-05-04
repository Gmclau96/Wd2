const express = require('express');
const app = express();
require('dotenv').config()
const cookieParser = require('cookie-parser');
app.use(cookieParser())

app.use(express.urlencoded({
    extended: true
}))

const path = require('path');
const public = path.join(__dirname, 'public');
app.use(express.static(public));


const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');

const router = require('./routes/menuRoutes');
app.use('/', router);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server running on ${PORT}, CTRL+C to close')
})