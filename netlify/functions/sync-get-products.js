exports.handler = async function () {
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
        return {
            statusCode: res.status,
            body: JSON.stringify({
                message: "Cannot get the list of products from Ontrack Pro Sync."
            })
        };
    }
};
