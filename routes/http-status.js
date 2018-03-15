var router = require('express').Router();

router.get('/',function(req,res){
  res.send('Root of http-status Router');
})

module.exports = router;
