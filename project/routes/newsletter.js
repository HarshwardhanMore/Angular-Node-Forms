const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController')


router.post('/newsletter', newsletterController.addNewsletterDetails);
router.post('/newsletter/getAllNewsletterDetails', newsletterController.getAllNewsletterDetails);
router.post('/newsletter/getNewsletterDetailsById', newsletterController.getNewsletterDetailsById);

module.exports = router


