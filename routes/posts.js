var express=require('express');
//import express from 'express' (below ES6 syntax)
var router=express.Router()


router.get('/test-query',function(req,res){//receive the request
    //take the data from request
        var n=req.query.name
        var l=req.query.loc
    //connect with DB

    //db required operation

    //Prepare and send response back to client
    res.send(`hello i am ${n}, and i am from ${l}`)
})
router.post('/test-path/:name/:loc',function(req,res,next){//receive the request
    //take the data from request
        var n=req.params.name
        var l=req.params.loc
    //connect with DB

    //db required operation

    //Prepare and send response back to client
    res.send(`hello i am ${n}, and i am from ${l}`)
})
router.put('/test-headers',function(req,res,next){//receive the request
    //take the data from request
        var n=req.headers.name
        var l=req.headers.loc
    //connect with DB

    //db required operation

    //Prepare and send response back to client
    res.send(`hello i am ${n}, and i am from ${l}`)
})
router.post('/test-body',function(req,res,next){//receive the request
    //take the data from request
        var n=req.body.name
        var l=req.body.loc
    //connect with DB

    //db required operation

    //Prepare and send response back to client
    res.send(`hello i am ${n}, and i am from ${l}`)
})

module.exports=router;