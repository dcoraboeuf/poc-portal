const fetch = require('node-fetch');

const syncGet = async (path, error) => {
    const username = process.env.ONTRACK_PRO_SYNC_AUTH_USERNAME;
    const password = process.env.ONTRACK_PRO_SYNC_AUTH_TOKEN;
    const authString = `${username}:${password}`
    const res = await fetch(`${process.env.ONTRACK_PRO_SYNC_URL}/${path}`, {
        headers: {
            Authorization: `Basic ${btoa(authString)}`,
        },
    });
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error(`${error}. Details = ${res}`);
    }
};

exports.syncPortalGetProducts = async () => {
    return syncGet('rest/portal/products', 'Cannot get products');
}

exports.syncPortalInstanceCheck = async (name) => {
    return syncGet(`rest/portal/instance/${name}/check`, 'Cannot check the instance name');
}
