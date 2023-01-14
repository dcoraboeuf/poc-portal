exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            domain: process.env.ONTRACK_PRO_DOMAIN
        })
    };
};
