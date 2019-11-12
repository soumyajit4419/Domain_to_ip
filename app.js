const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const { execFile } = require('child_process');

app.get('/', function (req, res, next) {
    console.log("in the index page");
    res.sendFile(path.join(__dirname, 'view', 'index.html'));

});




app.post('/getIp', function (req, res) {
    var name = req.body.dName
    const child = execFile('nslookup', [`${name}`], (error, stdout, stderr) => {
        if (error) {
            throw error;
        }
        else {
            res.json(stdout)
        }
    });

})


app.listen(8000);