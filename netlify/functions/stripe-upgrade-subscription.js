const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    const {subscriptionId, priceId} = event.queryStringParameters;

    // Loads the existing subscription
    const existingSubscription = await stripe.subscriptions.retrieve(subscriptionId);

    // Gets the ID of the first item
    const itemId = existingSubscription.items.data[0].id;

    const newSubscription = await stripe.subscriptions.update(subscriptionId, {
        cancel_at_period_end: false,
        items: [
            {
                id: itemId,
                price: priceId,
            }
        ]
    });

    return {
        statusCode: 200,
        body: JSON.stringify({
            subscription: newSubscription
        })
    }
};