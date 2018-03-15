var router = require('express').Router();

router.get('/',function(req,res){
  res.send('Root of Cookie Router');
})

module.exports = router;
