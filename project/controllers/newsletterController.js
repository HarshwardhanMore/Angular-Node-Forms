const newsletterService = require("../services/newsletterService");
const { buildResponce } = require("../helpers/buildResponce");

exports.addNewsletterDetails = async (req, res) => {
  try {
    const newsletterDetails = req.body;

    const checkEmail = await newsletterService.getNewsletterDetailsByEmail(newsletterDetails.email);
    if(checkEmail){
      return buildResponce(res, 200, {
        error: false,
        message: "Newsletter already subscribed!",
        data: "",
      });
    } 

    const data = await newsletterService.addNewsletterDetails(
      newsletterDetails
    );
    if (data != null) {
      buildResponce(res, 200, {
        error: false,
        message: "Newsletter subscribed successfully",
        data: "",
      });
    } else {
      buildResponce(res, 200, {
        error: true,
        message: "Unable to subscribe newsletter, please try again",
        data: "",
      });
    }
  } catch (error) {
    console.log(error);

    buildResponce(res, 500, {
      error: true,
      message: "Internal Server Error",
      data: "",
    });
  }
};
exports.getAllNewsletterDetails = async (req, res) => {
  try {
    // const contactDetails = req.body;
    const data = await newsletterService.getAllNewsletterDetails();
    if (data != null) {
      buildResponce(res, 200, {
        error: false,
        message: "Fetched all newsletters successfully",
        data: data,
      });
    } else {
      buildResponce(res, 200, {
        error: true,
        message: "Unable to fetch newsletters, please try again",
        data: "",
      });
    }
  } catch (error) {
    console.log(error);

    buildResponce(res, 500, {
      error: true,
      message: "Internal Server Error",
      data: "",
    });
  }
};
exports.getNewsletterDetailsById = async (req, res) => {
  try {
    const dataFetchFilter = req.body;
    const data = await newsletterService.getNewsletterDetailsById(
      dataFetchFilter.id
    );
    if (data != null) {
      buildResponce(res, 200, {
        error: false,
        message: "Fetched newsletter successfully",
        data: data,
      });
    } else {
      buildResponce(res, 200, {
        error: true,
        message: "Unable to fetch newsletter, please try again",
        data: "",
      });
    }
  } catch (error) {
    console.log(error);

    buildResponce(res, 500, {
      error: true,
      message: "Internal Server Error",
      data: "",
    });
  }
};
exports.deleteNewsletterDetails = async (req, res) => {
  try {
    const dataToSend = req.body;
    const data = await newsletterService.deleteNewsletterDetails(
      dataToSend.id
    );
    if (data != false) {
      buildResponce(res, 200, {
        error: false,
        message: "Newsletter deleted successfully!",
        data: data,
      });
    } else {
      buildResponce(res, 200, {
        error: true,
        message: "Unable to delete newsletter, please try again",
        data: "",
      });
    }
  } catch (error) {
    console.log(error);

    buildResponce(res, 500, {
      error: true,
      message: "Internal Server Error",
      data: "",
    });
  }
};
