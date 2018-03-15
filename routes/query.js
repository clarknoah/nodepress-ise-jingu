var router = require('express').Router();

router.get('/',function(req,res){
  res.send('Root of query Router');
})

module.exports = router;
