const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * This hook is called upon the registration of a new customer in the portal.
 */
exports.handler = async (event) => {
    const {user} = JSON.parse(event.body);

    // Creates a new customer in Stripe
    const customer = await stripe.customers.create({name: user.user_metadata.full_name, email: user.email});
    console.log({
        user: user,
        customer: customer,
    });

    // Assign a role to the identity in Netlify
    return {
        statusCode: 200,
        body: JSON.stringify({
            app_metadata: {
                roles: ['customer'],
            },
            user_metadata: {
                full_name: user.user_metadata.full_name,
                stripe_customer_id: customer.id,
            },
        }),
    };
};