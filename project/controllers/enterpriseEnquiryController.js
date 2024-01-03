const enterpriseEnquiryService = require('../services/enterpriseEnquiryService');
const {buildResponce} = require('../helpers/buildResponce');



exports.addEnterpriseEnquiryDetails = async (req, res) => {

    try {
        const enterpriseEnquiryDetails = req.body;
        const data = await enterpriseEnquiryService.addEnterpriseEnquiryDetails(enterpriseEnquiryDetails);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Enterprise enquiry added successfully",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to add enterprise enquiry, please try again",
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
exports.getAllEnterpriseEnquiryDetails = async (req, res) => {

    try {
        const data = await enterpriseEnquiryService.getAllEnterpriseEnquiryDetails();
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Fetched all enterprise enquiries successfully",
                    data: data
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to fetch enterprise enquiries, please try again",
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
exports.getEnterpriseEnquiryDetailsById = async (req, res) => {

    try {
        const dataFetchFilter = req.body;
        const data = await enterpriseEnquiryService.getEnterpriseEnquiryDetailsById(dataFetchFilter.id);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Fetched enterprise enquiries successfully",
                    data: data
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to fetch enterprise enquiries, please try again",
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
