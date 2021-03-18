const express = require('express');
const router = express.Router();

const controller = require('../controllers/heroeController');


router.get('/', controller.main); 


router.get('/detalles/:id', controller.detalle); 

router.get('/bio/:id/:ok?', controller.bio);



module.exports = router;

