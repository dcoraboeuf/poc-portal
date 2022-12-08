const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    const {
        customer_id,
        return_url,
    } = event.queryStringParameters;
    const session = await stripe.billingPortal.sessions.create({
        customer: customer_id,
        configuration: process.env.STRIPE_BILLING_PORTAL_CONFIG_ID,
        return_url: return_url,
    });
    return {
        statusCode: 200,
        body: JSON.stringify({
            billingPortal: {
                url: session.url,
            }
        })
    }
};