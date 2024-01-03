const contactService = require('../services/contactService');
const {buildResponce} = require('../helpers/buildResponce');



exports.addContactDetails = async (req, res) => {

    try {
        const contactDetails = req.body;
        const data = await contactService.addContactDetails(contactDetails);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Contact details Added successfully",
                    data: ''
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to add contact details, please try again",
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
exports.getAllContactDetails = async (req, res) => {

    try {
        const data = await contactService.getAllContactDetails();
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Fetched all contact details successfully",
                    data: data
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to fetch contact details, please try again",
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
exports.getContactDetailsById = async (req, res) => {

    try {
        const dataFetchFilter = req.body;
        const data = await contactService.getContactDetailsById(dataFetchFilter.id);
        if (data != null) {
            buildResponce(res, 200,
                {
                    error: false,
                    message: "Fetched contact details successfully",
                    data: data
                })
        } else {
            buildResponce(res, 200,
                {
                    error: true,
                    message: "Unable to fetch contact details, please try again",
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
