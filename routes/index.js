var router = require('express').Router();

router.get('/', function(req,res){
  res.send('Yolo 2.0');
})

router.use('/verb', require('./verb'));
router.use('/static', require('./verb'));
router.use('/req',require('./req'));
router.use('/res',require('./res'));
router.use('/cookie',require('./cookie'));
router.use('/meta',require('./meta'));
router.use('/query',require('./query'));
router.use('/http-status',require('./http-status'));




module.exports = router;
