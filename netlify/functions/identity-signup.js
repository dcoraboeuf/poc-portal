exports.handler = async (event) => {
    const { user } = JSON.parse(event.body);
    console.log("user = ", user);
};