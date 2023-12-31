const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController')


router.post('/contact', contactController.addContactDetails);
router.post('/contact/getAllContactDetails', contactController.getAllContactDetails);
router.post('/contact/getContactDetailsById', contactController.getContactDetailsById);

module.exports = router


