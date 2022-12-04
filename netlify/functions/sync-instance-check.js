const {syncPortalInstanceCheck} = require("./sync/syncClient");

exports.handler = async (event) => {
    console.log({event});
    const {name} = JSON.parse(event.body);
    return {
        statusCode: 200,
        body: JSON.stringify({
            name: name,
            available: false,
        })
    }
};
