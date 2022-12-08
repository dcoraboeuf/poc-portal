const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    const {
        name,
        selectedPriceId,
        cancel_url,
        success_url,
        customer_id
    } = event.queryStringParameters;
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price: selectedPriceId,
                quantity: 1,
            },
        ],
        mode: 'subscription',
        cancel_url,
        success_url,
        customer: customer_id,
        customer_update: {
            address: 'auto',
            name: 'auto',
        },
        subscription_data: {
            description: `https://${name}.ontrack.run`,
            metadata: {
                'provisioning.name': name,
            }
        },
        tax_id_collection: {
            enabled: true,
        }
    });
    return {
        statusCode: 200,
        body: JSON.stringify({
            checkout: {
                url: session.url,
            }
        })
    }
};