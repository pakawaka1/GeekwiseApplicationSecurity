const express = require('express');
const router = express.Router();

//Get Homepage
router.get('/', function(req, res){
    res.render('index');
});

router.post('/', function(req,res){
    const text = req.body.text;
    const name = req.body.name;
    const date = req.body.date;

    console.log(name);

});
module.exports = router;
