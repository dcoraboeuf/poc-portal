const {syncPortalCustomerCreate} = require("./sync/syncClient");

/**
 * This hook is called upon the registration of a new customer in the portal.
 */
exports.handler = async (event) => {
    const {user} = JSON.parse(event.body);

    // Creates a new customer in Pro Sync
    const {customer} = await syncPortalCustomerCreate({
        email: user.email,
        fullName: user.user_metadata.full_name,
    });

    // Assign a role to the identity in Netlify
    return {
        statusCode: 200,
        body: JSON.stringify({
            app_metadata: {
                roles: ['customer'],
                stripe_customer_id: customer.id,
            },
        }),
    };
};