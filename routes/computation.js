var express = require('express');
var router = express.Router();
 
var x ;
 
/* GET users listing. */
router.get('/', function (req, res, next) {
    
    x = Math.random();
    // res.send('hello');
 
    res.write('[Math.log2()] applied to ' + `${ [x]}` + ' is ' + `${[Math.log2(x)]}\n`);
    
    res.write('[Math.floor()] applied to ' + `${ [x]}` + ' is ' + `${[Math.floor(x)]}`);
    res.end();
 
});
 
module.exports = router;