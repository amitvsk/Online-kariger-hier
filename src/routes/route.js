const express = require('express');
const { size } = require('lodash');
const logger = require('../logger/logger');
const log = require('../util/helper');
const trim = require('../vailidator/formatter');
const lodash = require('lodash')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('',logger.logger);
    log.log();
    trim.trim();
    res.send('Hi my name is amit vishwakarma.')
});

router.get('/hello', function (req, res) {
    let arr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let newarr = lodash.chunk(arr,3)
    console.log(newarr)
//2 problem solution
    let num = [1,3,5,7,9,11,13,15,17,19]
    let num1 = lodash.tail(num,[n = 9])
    console.log(num1)


//3 problem solution
    let a = [1,3,4,7]
    let b = [2,7,9,3]
    let c = [3,1,14,4]
    let d = [4,2,4,99]
    let e = [6,4,2]

    let unnum = lodash.union(a,b,c,d,e)
    console.log(unnum);
//4 problem solution
    let specialkey = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"],["Vijendra","Singh"]];
    let un = lodash.fromPairs(specialkey);
    console.log(un);

    res.send('This is seconed handler');
});

module.exports = router;
// adding this comment for no reason