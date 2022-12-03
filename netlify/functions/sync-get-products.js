exports.handler = async function () {
    return {
        statusCode: 200,
        body: JSON.stringify([
            {
                id: "prd",
                name: "Starter",
                description: "Up to 10 projects"
            }
        ]),
    };
};
