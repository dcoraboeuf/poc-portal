const {syncPortalCustomerBilling} = require("./sync/syncClient");

exports.handler = async (event) => {
    const {
        customer_id,
        return_url,
    } = event.queryStringParameters;
    const json = await syncPortalCustomerBilling({
        customerId: customer_id,
        returnUrl: return_url,
    });
    return {
        statusCode: 200,
        body: JSON.stringify(json)
    };
};