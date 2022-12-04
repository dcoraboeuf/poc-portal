const fetch = require('node-fetch');

exports.syncPortalGetProducts = async () => {
    const username = process.env.ONTRACK_PRO_SYNC_AUTH_USERNAME;
    const password = process.env.ONTRACK_PRO_SYNC_AUTH_TOKEN;
    const authString = `${username}:${password}`
    const res = await fetch(`${process.env.ONTRACK_PRO_SYNC_URL}/rest/portal/products`, {
        headers: {
            Authorization: `Basic ${btoa(authString)}`,
        },
    });
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error(`Cannot get products. Details = ${res}`);
    }
}
