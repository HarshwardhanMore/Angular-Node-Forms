const router = require('express').Router();

router.use('/user', require('./contact'));
router.use('/user', require('./userEnquiry'));
router.use('/user', require('./enterpriseEnquiry'));
router.use('/user', require('./newsletter'));

module.exports = router

