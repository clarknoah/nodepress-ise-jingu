var router = require('express').Router();

router.get('/',function(req,res){
  res.send('You performed a meta request!');
})

module.exports = router;
