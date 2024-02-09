const db = require("../models");

const Newsletter = db.newsletter;

exports.addNewsletterDetails = async (newsletterDetails) => {
  try {
    const newNewsletter = await Newsletter.create(newsletterDetails);
    return newNewsletter;
  } catch (error) {
    throw new Error("Error adding newsletter" + error.message);
  }
};
exports.getAllNewsletterDetails = async () => {
  try {
    const allNewsletterDetails = await Newsletter.findAll();
    return allNewsletterDetails;
  } catch (error) {
    throw new Error("Error fetching all user enquiries" + error.message);
  }
};
exports.getNewsletterDetailsById = async (id) => {
  try {
    const newsletterDetail = await Newsletter.findOne({ where: { id: id } });
    return newsletterDetail;
  } catch (error) {
    throw new Error("Error fetching newsletter" + error.message);
  }
};
exports.getNewsletterDetailsByEmail = async (email) => {
  try {
    const newsletterDetail = await Newsletter.findOne({
      where: { email: email },
    });
    return newsletterDetail;
  } catch (error) {
    throw new Error("Error fetching newsletter" + error.message);
  }
};
exports.deleteNewsletterDetails = async (id) => {
  try {
    const newsletterDetail = await Newsletter.findOne({ where: { id: id } });
    if (newsletterDetail) {
        await newsletterDetail.destroy();
        return newsletterDetail;
    }
    return false;
  } catch (error) {
    throw new Error("Error fetching newsletter" + error.message);
  }
};
