const {syncPortalInstanceCheck} = require("./sync/syncClient");

exports.handler = async (event) => {
    const {name} = event.queryStringParameters;
    const json = await syncPortalInstanceCheck(name);
    return {
        statusCode: 200,
        body: JSON.stringify(json)
    }
};
