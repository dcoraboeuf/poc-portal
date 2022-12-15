const {syncPortalInstanceCheckout} = require("./sync/syncClient");

exports.handler = async (event) => {
    const {
        name,
        selectedPriceId,
        cancel_url,
        success_url,
        customer_id
    } = event.queryStringParameters;
    const json = await syncPortalInstanceCheckout({
        name,
        customerId: customer_id,
        priceId: selectedPriceId,
        cancelUrl: cancel_url,
        successUrl: success_url,
    });
    return {
        statusCode: 200,
        body: JSON.stringify(json)
    };
};