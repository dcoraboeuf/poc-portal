const {syncPortalGetProducts} = require("./sync/syncClient");

exports.handler = async () => {
    const json = await syncPortalGetProducts();
    return {
        statusCode: 200,
        body: JSON.stringify(json)
    }
};
