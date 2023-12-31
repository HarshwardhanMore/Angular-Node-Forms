const express = require('express');
const router = express.Router();
const userEnquiryController = require('../controllers/userEnquiryController')


router.post('/userEnquiry', userEnquiryController.addUserEnquiryDetails);
router.post('/userEnquiry/getAllUserEnquiryDetails', userEnquiryController.getAllUserEnquiryDetails);
router.post('/userEnquiry/getUserEnquiryDetailsById', userEnquiryController.getUserEnquiryDetailsById);

module.exports = router


