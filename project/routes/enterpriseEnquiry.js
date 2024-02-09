const express = require('express');
const router = express.Router();
const enterpriseEnquiryController = require('../controllers/enterpriseEnquiryController')

router.post('/enterpriseEnquiry', enterpriseEnquiryController.addEnterpriseEnquiryDetails);
router.post('/enterpriseEnquiry/getAllEnterpriseEnquiryDetails', enterpriseEnquiryController.getAllEnterpriseEnquiryDetails);
router.post('/enterpriseEnquiry/getEnterpriseEnquiryDetailsById', enterpriseEnquiryController.getEnterpriseEnquiryDetailsById);
router.post('/enterpriseEnquiry/changeEnterpriseEnquiryStatus', enterpriseEnquiryController.changeEnterpriseEnquiryStatus);
router.post('/enterpriseEnquiry/deleteEnterpriseEnquiryDetails', enterpriseEnquiryController.deleteEnterpriseEnquiryDetails);

module.exports = router


