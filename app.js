const express = require('express');
const app = express();
const ExpressError = require("./expressError");
const { medianFind, modeFind, meanFind, counting, convNumb } = require('./helpers');

app.get('/mean', function(req, res, next){
    if(!req.query,nums){
        throw new ExpressError('You must pass a query key of an array of nums, separated by commas', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convNumb(numsAsStrings);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let result = {
        operation: "mean",
        result: meanFind(nums)
    }
    return res.send(result);
});

app.get('/median', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError('You must pass a query key of an array of nums, separated by commas', 400)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convNumb(numsAsStrings);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "median",
        result: medianFind(nums)
    }
    return res.send(result);
});

app.get('/mode', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError('You must pass a query key of an array of nums, separated by commas', 404)
    }
    let numsAsStrings = req.query.nums.split(',');
    let nums = convNumb(numsAsStrings);
    if(nums instanceof Error){
        throw new ExpressError(nums.message);
    }
    let result = {
        operation: "mode",
        result: modeFind(nums)
    }
    return res.send(result);
});

app.use(function(req, res, next){
    const err = new ExpressError("Not Found", 404);
    return next(err);
});

app.use(function(req, res, next){
    res.status(err.stats || 500);
    return res.json({
        error: err,
        message: err.message
    });
});

app.listen(3000, function(){
    console.log('Server starting on port 3000');
});