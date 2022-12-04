const {syncPortalInstanceCheck} = require("./sync/syncClient");

exports.handler = async (event) => {
    console.log({event});
    const {name} = event.queryStringParameters;
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: name,
            available: false,
        })
    }
};
