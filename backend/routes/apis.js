var express = require('express');
var router = express.Router();
var wscQuery =require('../database/config')
require('mongoose');
var mongodb=require('mongodb');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('apis/index', { title: 'APIS' });
}); 

router.get('/json', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/queryContentbyName', function(req, res, next) {
    console.log('get data');
    console.log(req.query.name);

     if(req.query.name) {
    var name=new RegExp(req.query.name);//模糊查询参数
        console.log(name);
    }
    mongodb.connect('mongodb://localhost:27017/wsc', function(err, conn){
         conn.collection('articles', function(err, coll){ 
              coll.find({'content':name}).toArray(function(err,docs){
                  console.log(docs)
                  res.json(docs)
         })
        })
    })
}); 
router.get('/queryTitlebyName', function(req, res, next) {
    console.log('get data');
    console.log(req.query.name);

     if(req.query.name) {
    var name=new RegExp(req.query.name);//模糊查询参数
        console.log(name);
    }
    mongodb.connect('mongodb://localhost:27017/wsc', function(err, conn){
         conn.collection('articles', function(err, coll){ 
              coll.find({'title':name}).toArray(function(err,docs){
                  var len=docs.length
                  console.log(len)
                  var result=[];
                  for(i=0;i<len;i++){
                      result[i]=(docs[i].title)
                  }
                  res.send(result)
         })
        })
    })
});



module.exports = router;
