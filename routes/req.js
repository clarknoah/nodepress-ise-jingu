var router = require('express').Router();

router.get('/',function(req,res){
  res.send('Root of Req Router');
})


router.get('/params/:key',function(req,res){
  console.log(req.params);

})


router.post('/body',function(req,res){
  console.log(req.body);
  res.send(req.body);

})


router.get('/ip',function(req,res){
  console.log(req.ip);

})

router.get('/path',function(req,res){
  console.log('Displays the final path in the URL (after last /)');
  console.log(req.path);
  res.send(`This is the path: ${req.path}`);
})

router.get('/protocol',function(req,res){
  console.log('Displays the protocol being used between client and server');
  console.log(req.protocol);
  res.send(req.protocol);
})

router.get('/secure-status',function(req,res){
  console.log('Boolean of whether or not the connection is seceure');
  console.log(req.secure);
  res.send(req.secure);
})

router.get('/languages',function(req,res){
  console.log('Informs the server what language the client is using');
  console.log(req.acceptsLanguages);
  res.send(req.acceptedLanguages);
})


module.exports = router;
