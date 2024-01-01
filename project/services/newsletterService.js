const db = require('../models');

const Newsletter = db.newsletter;

exports.addNewsletterDetails = async (newsletterDetails)=>{
   
    try {
       const newNewsletter =  await Newsletter.create(newsletterDetails)
       return newNewsletter;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}
exports.getAllNewsletterDetails = async ()=>{
   
    try {

       const allNewsletterDetails =  await Newsletter.findAll()
       return allNewsletterDetails;
    } catch (error) {
        throw new Error("Error fetching all user enquiries"+error.message);
    }
}
exports.getNewsletterDetailsById = async (id)=>{
   
    try {

       const newsletterDetail =  await Newsletter.findOne({where: {id: id}});
       return newsletterDetail;
    } catch (error) {
        throw new Error("Error fetching user enquiry"+error.message);
    }
}