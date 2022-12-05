import Header from "@components/Header";
import MainButtonBar from "@components/MainButtonBar";
import CancelButton from "@components/CancelButton";
import {useEffect, useState} from "react";
import SubmitButton from "@components/SubmitButton";
import FormTemplate from "@components/FormTemplate";
import ProductGroup from "@components/sync/ProductGroup";

async function submitSubscriptionForm(selectedPriceId) {
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
        cancel_url: `${window.location.origin}/subscription/creation`,
        success_url: `${window.location.origin}?name=${instanceName}`, // TODO Success page
        customer_id: 'cus_MugnmOKoo93epL', // TODO Gets the customer ID
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

export default function SubscriptionCreation() {
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
        getProducts();
    }, []);

    function onPriceSelected(price) {
        setSelectedPriceId(price.id);
    }

    async function onSubscriptionSubmit(event) {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();
        // Submission
        await submitSubscriptionForm(selectedPriceId);
    }

    return (
        <>
            <Header text="New subscription"/>

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
                    Instance name:
                    <input id="instanceName" type="text"
                           required={true}
                           pattern="[a-z][a-z0-9]{1,32}"
                           className="
                                form-control
                                block
                                w-100
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                my-2
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "/>
                </label>
                <MainButtonBar>
                    <SubmitButton text="Order" enabled={selectedPriceId !== null}/>
                    <CancelButton/>
                </MainButtonBar>
            </FormTemplate>

        </>
    )
}
