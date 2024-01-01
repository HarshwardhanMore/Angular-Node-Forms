const db = require('../models');

const EnterpriseEnquiry  = db.enterpriseEnquiry;

exports.addEnterpriseEnquiryDetails = async (enterpriseEnquiryDetails)=>{
   
    try {
       const newEnterpriseEnquiry =  await EnterpriseEnquiry.create(enterpriseEnquiryDetails)
       return newEnterpriseEnquiry;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}
exports.getAllEnterpriseEnquiryDetails = async ()=>{
   
    try {

       const allEnterpriseEnquiryDetails =  await EnterpriseEnquiry.findAll()
       return allEnterpriseEnquiryDetails;
    } catch (error) {
        throw new Error("Error fetching all enterprise enquiries"+error.message);
    }
}
exports.getEnterpriseEnquiryDetailsById = async (id)=>{
   
    try {

       const enterpriseEnquiryDetails =  await EnterpriseEnquiry.findOne({where: {id: id}});
       return enterpriseEnquiryDetails;
    } catch (error) {
        throw new Error("Error fetching enterprise enquiry"+error.message);
    }
}