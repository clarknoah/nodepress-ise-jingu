var router = require('express').Router();

router.get('/get',function(req,res){
  res.send('Root of static Router');
})

module.exports = router;
