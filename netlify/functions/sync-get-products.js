exports.handler = async function () {
    console.log("env = ", process.env);
    let username = process.env.ONTRACK_PRO_SYNC_AUTH_USERNAME;
    let password = process.env.ONTRACK_PRO_SYNC_AUTH_TOKEN;
    let authString = `${username}:${password}`
    const res = await fetch(`${process.env.ONTRACK_PRO_SYNC_URL}/rest/portal/products`, {
        headers: {
            Authorization: `Basic ${btoa(authString)}`,
        },
    });
    if (res.ok) {
        return {
            statusCode: 200,
            body: JSON.stringify(await res.json()),
        };
    } else {
        return res;
    }
};
