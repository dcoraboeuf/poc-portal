import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/authContext";
import Subscription from "@components/Subscription";

export default function SubscriptionUpgrade({subscriptionId}) {
    const {user} = useContext(AuthContext);
    // Loading the subscription from the Portal API
    const [subscription, setSubscription] = useState();
    useEffect(() => {
        async function getSubscription() {
            if (user && subscriptionId) {
                const res = await fetch(`/.netlify/functions/sync-get-subscription?customerId=${user.user_metadata.stripe_customer_id}&subscriptionId=${subscriptionId}`);
                if (res.ok) {
                    const data = await res.json();
                    setSubscription(data);
                } else {
                    throw new Error(`Failed to fetch a subscription (code = ${res.status}).`);
                }
            }
        }

        getSubscription().then(r => {/* */
        });
    }, [user]);

    return (
        <div className="container">
            <p className="fs-5 text-muted my-4">
                (1) Subscription to upgrade
            </p>
            <Subscription subscription={subscription}/>
            <p className="fs-5 text-muted my-4">
                (2) Plan to upgrade to
            </p>
        </div>
    )
}