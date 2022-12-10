import {useContext, useEffect, useState} from "react";
import ProductGroup from "@components/sync/ProductGroup";
import FormTemplate from "@components/common/FormTemplate";
import {AuthContext} from "../contexts/authContext";
import LoadingComponent from "@components/common/LoadingComponent";

export default function SubscriptionCreation() {

    // Gets the customer ID
    const {user} = useContext(AuthContext);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPriceId, setSelectedPriceId] = useState(null);
    useEffect(() => {
        async function getProducts() {
            const res = await fetch('/.netlify/functions/sync-get-products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
                setLoading(false);
            } else {
                throw new Error(`Failed to fetch the list of available products (code = ${res.status}).`);
            }
        }

        getProducts().then(r => {/* */
        });
    }, []);

    function onPriceSelected(price) {
        setSelectedPriceId(price.id);
    }

    async function onSubscriptionSubmit(event) {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
        // Gets the customer id
        const customerId = user.user_metadata.stripe_customer_id;
        if (!customerId) {
            throw new Error("Cannot proceed because to customer ID was found associated to your profile.");
        }
        // Gets the value of the instance name field
        const instanceName = document.querySelector('#instanceName').value;
        // Instance name validation
        const res = await fetch(`/.netlify/functions/sync-instance-check?name=${instanceName}`);
        if (!res.ok) {
            throw new Error(`Cannot validate the instance name.`);
        }
        const {available} = await res.json();
        if (!available) {
            throw new Error(`Instance name "${instanceName}" is not available.`);
        }
        // Starts the Stripe session and gets its URL
        const checkoutParams = {
            name: instanceName,
            selectedPriceId: selectedPriceId,
            cancel_url: `${window.location.origin}/subscriptions/creation`,
            success_url: `${window.location.origin}/subscriptions/success?name=${instanceName}`,
            customer_id: customerId,
        };
        const checkoutURL = new URL(`${window.location.origin}/.netlify/functions/stripe-checkout-session`);
        for (let k in checkoutParams) {
            checkoutURL.searchParams.append(k, checkoutParams[k]);
        }
        const checkoutRes = await fetch(checkoutURL);
        if (!checkoutRes.ok) {
            throw new Error(`Cannot start the Stripe checkout session.`);
        }
        const checkoutInfo = await checkoutRes.json();
        // Redirects to the Stripe checkout URL
        window.location = checkoutInfo.checkout.url;
    }

    return (
        <>

            <div className="container">

                <div className="p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">New subscription</h1>
                </div>

                <p className="fs-5 text-muted my-4">
                    (1) Choose the product
                </p>

                <LoadingComponent loading={loading} loadingMessage={"Loading the products..."}>
                    <ProductGroup
                        products={products}
                        initialPrice={null}
                        onPriceSelected={onPriceSelected}
                    />
                </LoadingComponent>

                <p className="fs-5 text-muted my-4">
                    (2) Choose the name for your instance
                </p>

                <FormTemplate onSubmit={onSubscriptionSubmit}>
                    <div className="mb-3">
                        <input type="text"
                               className="form-control w-25"
                               id="instanceName"
                               required={true}
                               pattern="[a-z][a-z0-9-]{1,32}"
                        />
                        <div className="form-text">
                            The URL of your Ontrack installation will be
                            &nbsp;
                            <code>https://`name`.ontrack.run</code>
                        </div>
                    </div>
                    <div className="">
                        <button type="submit"
                                disabled={!selectedPriceId}
                                className="btn btn-primary">
                            Order
                        </button>
                        <a href="/" className="btn btn-link">
                            Cancel
                        </a>
                    </div>
                </FormTemplate>

            </div>

        </>
    );
}