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

const syncPost = async (path, payload, error) => {
    const username = process.env.ONTRACK_PRO_SYNC_AUTH_USERNAME;
    const password = process.env.ONTRACK_PRO_SYNC_AUTH_TOKEN;
    const authString = `${username}:${password}`
    const res = await fetch(`${process.env.ONTRACK_PRO_SYNC_URL}/${path}`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa(authString)}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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

exports.syncPortalGetSubscriptions = async (customerId) => {
    return syncGet(`rest/portal/customer/${customerId}/subscriptions`, 'Cannot get subscriptions');
}

exports.syncPortalGetSubscription = async (customerId, subscriptionId) => {
    return syncGet(`rest/portal/customer/${customerId}/subscriptions/${subscriptionId}`, 'Cannot get subscription');
}

exports.syncPortalInstanceCheck = async (name) => {
    return syncGet(`rest/portal/instance/${name}/check`, 'Cannot check the instance name');
}

exports.syncPortalInstanceCheckout = async ({name, customerId, priceId, cancelUrl, successUrl}) => {
    return syncPost(`rest/portal/instance/${name}/checkout`, {
        customerId,
        priceId,
        cancelUrl,
        successUrl,
    }, "Cannot start the checkout session");
}

exports.syncPortalCustomerBilling = async ({customerId, returnUrl}) => {
    return syncPost(`rest/portal/customer/${customerId}/billing`, {
        returnUrl,
    }, "Cannot start the billing portal session");
}

exports.syncPortalCustomerCreate = async ({email, fullName}) => {
    return syncPost(`rest/portal/customer`, {
        email,
        fullName,
    }, "Cannot create a customer");
}

exports.syncPortalSubscriptionUpgrade = async ({subscriptionId, priceId}) => {
    return syncPost(`rest/portal/subscription/${subscriptionId}/upgrade`, {
        priceId,
    }, "Cannot upgrade the subscription");
}
