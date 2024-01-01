const db = require('../models');

const Contact  = db.contact;


exports.addContactDetails = async (contactDetails)=>{
   
    try {

       const newContact =  await Contact.create(contactDetails)
       return newContact;
    } catch (error) {
        throw new Error("Error adding contact details"+error.message);
    }
}
exports.getAllContactDetails = async ()=>{
   
    try {

       const allContactDetails =  await Contact.findAll()
       return allContactDetails;
    } catch (error) {
        throw new Error("Error fetching all contact details"+error.message);
    }
}
exports.getContactDetailsById = async (id)=>{
   
    try {

       const contactDetail =  await Contact.findOne({where: {id: id}});
       return contactDetail;
    } catch (error) {
        throw new Error("Error fetching contact details"+error.message);
    }
}