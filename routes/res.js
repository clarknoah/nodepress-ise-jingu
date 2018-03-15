var router = require('express').Router();

router.get('/',function(req,res){
  res.send('Root of Res Router');
})

module.exports = router;
