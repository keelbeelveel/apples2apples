// Script modified: Sat July 11, 2020 @ 02:40:48 EDT
const express = require('express');
const router = express.Router();

router.post('/api/codeTypes', (req, res) => {
    var status = 200;
    resBody = `Your POST resquest was recieved: ${JSON.stringify(req)}`;
    res.status(status).send(resBody);
});
                                                                       
router.get('/api/codeTypes', (req, res) => {                           
    var status = 200;                                                  
    resBody = `Your POST resquest was recieved: ${JSON.stringify(req)}`;
    res.status(status).send(resBody);                                  
});                                                                    
                                                                       
module.exports = router;
