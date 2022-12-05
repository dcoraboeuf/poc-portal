exports.handler = async (event) => {
    const {name} = event.queryStringParameters;
    return {
        statusCode: 200,
        body: JSON.stringify({
            checkout: {
                url: 'https://en.wikipedia.org' // TODO
            }
        })
    }
};