import {AuthContext} from "../contexts/authContext";
import {Fragment, useContext, useEffect, useState} from "react";
import Subscription from "@components/Subscription";

export default function SubscriptionList() {
    const {user} = useContext(AuthContext);
    const [subscriptions, setSubscriptions] = useState([]);
    useEffect(() => {
        async function getSubscriptions() {
            if (user) {
                const res = await fetch(`/.netlify/functions/sync-get-subscriptions?customerId=${user.user_metadata.stripe_customer_id}`);
                if (res.ok) {
                    const data = await res.json();
                    setSubscriptions(data);
                } else {
                    throw new Error(`Failed to fetch the list of available subscriptions (code = ${res.status}).`);
                }
            }
        }

        getSubscriptions().then(r => {/* */
        });
    }, [user]);
    if (user) {
        return (
            <>
                <h3>List of subscriptions</h3>
                {
                    subscriptions.map(subscription => (
                        <Fragment key={subscription.id}>
                            <Subscription subscription={subscription}/>
                        </Fragment>
                    ))
                }
            </>
        )
    } else {
        return <></>
    }
}