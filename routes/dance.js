var express = require('express');
var router = express.Router();
var danceController = require('../controllers/dance.controller');

/* GET home page. */
router.get('/', danceController.list);
router.get('/detail/:id', danceController.detail);
router.post('/create', danceController.create);
router.put('/edit/:id', danceController.edit);
router.delete('/delete/:id', danceController.delete);



module.exports = router;