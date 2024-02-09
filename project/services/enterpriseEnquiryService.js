const db = require("../models");

const EnterpriseEnquiry = db.enterpriseEnquiry;

exports.addEnterpriseEnquiryDetails = async (enterpriseEnquiryDetails) => {
  try {
    
    const newEnterpriseEnquiry = await EnterpriseEnquiry.create(
      enterpriseEnquiryDetails
    );
    return newEnterpriseEnquiry;
  } catch (error) {
    throw new Error("Error adding enterprise enquiry" + error.message);
  }
};
exports.getAllEnterpriseEnquiryDetails = async () => {
  try {
    const allEnterpriseEnquiryDetails = await EnterpriseEnquiry.findAll();
    return allEnterpriseEnquiryDetails;
  } catch (error) {
    throw new Error("Error fetching all enterprise enquiries" + error.message);
  }
};
exports.getEnterpriseEnquiryDetailsById = async (id) => {
  try {
    const enterpriseEnquiryDetails = await EnterpriseEnquiry.findOne({
      where: { id: id },
    });
    return enterpriseEnquiryDetails;
  } catch (error) {
    throw new Error("Error fetching enterprise enquiry" + error.message);
  }
};
exports.changeEnterpriseEnquiryStatus = async (id) => {
  try {
    const enterpriseEnquiryDetail = await EnterpriseEnquiry.findOne({ where: { id: id } });
    if(enterpriseEnquiryDetail){
      console.log("enterpriseEnquiryDetail : ", enterpriseEnquiryDetail);
      console.log("enterpriseEnquiryDetail.status before : ", enterpriseEnquiryDetail.status);
      enterpriseEnquiryDetail.status = !enterpriseEnquiryDetail.status;
      enterpriseEnquiryDetail.save();
      console.log("enterpriseEnquiryDetail.status after : ", enterpriseEnquiryDetail.status);
      return true;
    }
    return false;
  } catch (error) {
    throw new Error("Error adding enterprise enquiry" + error.message);
  }
};
exports.deleteEnterpriseEnquiryDetails = async (id) => {
  try {
    const enterpriseEnquiryDetail = await EnterpriseEnquiry.findOne({ where: { id: id } });
    if (enterpriseEnquiryDetail) {
        await enterpriseEnquiryDetail.destroy();
        return enterpriseEnquiryDetail;
    }
    return false;
  } catch (error) {
    throw new Error("Error fetching enterprise enquiry" + error.message);
  }
};
