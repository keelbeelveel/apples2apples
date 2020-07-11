// Script modified: Sat July 11, 2020 @ 05:14:55 EDT
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    var status = 200;
    resBody = "Your POST resquest was recieved: ";
    res.status(status).send(resBody).json(req.body);
});

router.get('/', (req, res) => {
    console.log("API/Code Get request");
    var status = 200;
    resBody = "Your POST resquest was recieved: ";
    res.status(status).send(resBody).json(req.body);
});

module.exports = router;
