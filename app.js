const express = require('express');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

const exec = require('child_process').exec;



const app = express();
app.listen(8000);