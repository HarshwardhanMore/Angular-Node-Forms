
const userEnquiryService = require('../services/userEnquiryService');
const {buildResponce} = require('../helpers/buildResponce');



exports.addUserEnquiryDetails = async (req, res) => {

    try {
        const userEnquiryDetails = req.body;
        const data = await userEnquiryService.addUserEnquiryDetails(userEnquiryDetails);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "User enquiry added successfully",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to add user enquiry, please try again",
                    data: ''
                })
        }
    } catch (error) {
        console.log(error);

        buildResponce(res, 500,
            {
                error: true,
                message: "Internal Server Error",
                data: ''
            })
    }

}
exports.getAllUserEnquiryDetails = async (req, res) => {

    try {
        // const contactDetails = req.body;
        const data = await userEnquiryService.getAllUserEnquiryDetails();
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Fetched all user enquiries successfully",
                    data: data
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to fetch user enquiries, please try again",
                    data: ''
                })
        }
    } catch (error) {
        console.log(error);

        buildResponce(res, 500,
            {
                error: true,
                message: "Internal Server Error",
                data: ''
            })
    }

}
exports.getUserEnquiryDetailsById = async (req, res) => {

    try {
        const dataFetchFilter = req.body;
        const data = await userEnquiryService.getUserEnquiryDetailsById(dataFetchFilter.id);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Fetched user enquiries successfully",
                    data: data
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to fetch user enquiries, please try again",
                    data: ''
                })
        }
    } catch (error) {
        console.log(error);

        buildResponce(res, 500,
            {
                error: true,
                message: "Internal Server Error",
                data: ''
            })
    }

}
