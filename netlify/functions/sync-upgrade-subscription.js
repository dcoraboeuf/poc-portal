const {syncPortalSubscriptionUpgrade} = require("./sync/syncClient");

exports.handler = async (event) => {
    const {subscriptionId, priceId} = event.queryStringParameters;
    const json = await syncPortalSubscriptionUpgrade({
        subscriptionId,
        priceId,
    });
    return {
        statusCode: 200,
        body: JSON.stringify(json)
    };
};