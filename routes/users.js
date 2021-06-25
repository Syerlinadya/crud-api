const express = require('express')
const app = express()
const ObjectId = require('mongodb').ObjectId

app.get('/', function(req, res){
    res.render('./index', {title: 'XIR6'})
})

//tampilkan data
app.get('/tampil', function(req, res, next){
    req.db.collection('coba').find().sot({"_od"}).toArray(function(err,result));
})