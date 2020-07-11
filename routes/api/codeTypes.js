// Script modified: Sat July 11, 2020 @ 05:37:22 EDT
const express = require('express');
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

router.post('/', (req, res) => {
    console.log(req);
    var status = 200;
    reqIp = req.ip;
    resBody = `Your GET resquest was recieved: ${reqIp}`;
    res.status(status).send(resBody);
    console.log(req.body);
});

router.get('/', (req, res) => {
    console.log(req);
    console.log("API/Code Get request");
    var status = 200;
    reqIp = req.ip;
    resBody = `Your GET resquest was recieved: ${reqIp}`;
    res.status(status).send(resBody);
    console.log("BODY:");
    console.log(req.body);
});

module.exports = router;
