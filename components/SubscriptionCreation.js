import {useContext, useEffect, useState} from "react";
import ProductGroup from "@components/sync/ProductGroup";
import FormTemplate from "@components/FormTemplate";
import MainButtonBar from "@components/MainButtonBar";
import SubmitButton from "@components/SubmitButton";
import CancelButton from "@components/CancelButton";
import {AuthContext} from "../contexts/authContext";

export default function SubscriptionCreation() {

    // Gets the customer ID
    const {user} = useContext(AuthContext);

    const [products, setProducts] = useState([]);
    const [selectedPriceId, setSelectedPriceId] = useState(null);
    useEffect(() => {
        async function getProducts() {
            const res = await fetch('/.netlify/functions/sync-get-products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
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

            <p>Choose the product you want to subscribe to:</p>
            <ProductGroup
                products={products}
                initialPrice={null}
                onPriceSelected={onPriceSelected}
            />

            <p>Choose the name for your instance:</p>
            <p>The URL of your Ontrack installation will be <code>https://`name`.ontrack.run</code></p>

            <FormTemplate onSubmit={onSubscriptionSubmit}>
                <label>
                    <input id="instanceName" type="text"
                           required={true}
                           pattern="[a-z][a-z0-9-]{1,32}"
                           />
                </label>
                <MainButtonBar>
                    <SubmitButton text="Order" enabled={selectedPriceId !== null}/>
                    <CancelButton/>
                </MainButtonBar>
            </FormTemplate>

        </>
    );
}