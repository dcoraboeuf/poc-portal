const {syncPortalGetSubscription} = require("./sync/syncClient");

exports.handler = async (event) => {
    const {customerId, subscriptionId} = event.queryStringParameters;
    const json = await syncPortalGetSubscription(customerId, subscriptionId);
    return {
        statusCode: 200,
        body: JSON.stringify(json)
    }
};
