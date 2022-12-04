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

const intervalToNum = (i) => {
    if (i === 'month') {
        return 1;
    } else if (i === 'year') {
        return 2;
    } else {
        return 0;
    }
}

exports.syncPortalGetProducts = async () => {
    const products = await syncGet('rest/portal/products', 'Cannot get products');
    // Sorts the prices of each product per interval (month --> year)
    products.forEach(product => {
         product.prices.sort((a, b) => {
                const ia = intervalToNum(a.interval);
                const ib = intervalToNum(b.interval);
                return ia - ib;
         });
         // Injecting the product ID in each price
        product.prices.forEach(price => {
            price.product = product.id;
        });
    });
    // OK
    return products;
}

exports.syncPortalInstanceCheck = async (name) => {
    return syncGet(`rest/portal/instance/${name}/check`, 'Cannot check the instance name');
}
