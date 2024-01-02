const db = require('../models');

const UserEnquiry  = db.userEnquiry;

exports.addUserEnquiryDetails = async (userEnquiryDetails)=>{

    try {
    const newUserEnquiry =  await UserEnquiry.create(userEnquiryDetails)
    return newUserEnquiry;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}
exports.getAllUserEnquiryDetails = async ()=>{

    try {

    const allUserEnquiryDetails =  await UserEnquiry.findAll()
    return allUserEnquiryDetails;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}
exports.getUserEnquiryDetailsById = async (id)=>{

    try {

    const userEnquiryDetail =  await UserEnquiry.findOne({where: {id: id}});
    return userEnquiryDetail;
    } catch (error) {
        throw new Error("Error adding user enquiry"+error.message);
    }
}