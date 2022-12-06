const {syncPortalGetSubscriptions} = require("./sync/syncClient");

exports.handler = async (event) => {
    const {customerId} = event.queryStringParameters;
    const json = await syncPortalGetSubscriptions(customerId);
    return {
        statusCode: 200,
        body: JSON.stringify(json)
    }
};
