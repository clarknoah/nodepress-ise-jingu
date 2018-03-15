var router = require('express').Router();

router.get('/',function(req,res){
  res.send('Root of Verb Router');
})

router.get('/get',function(req,res){
  res.send('You did a get request!');
})

router.post('/post',function(req,res){
  console.log(req.body);
  res.send(`YOu posted ${req.body.post_key}`);
})

module.exports = router;
