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
                <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Subscriptions</h1>
                    <p className="fs-5 text-muted">
                        List of your existing subscriptions.
                    </p>
                </div>
                {/* No subscription yet */}
                {
                    !subscriptions.length && <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <p className="fs-5 text-muted">
                                No subscription yet. Click on "New subscription" below to get started.
                            </p>
                        </div>
                    </div>
                }
                {/* One card per subscription */}
                {
                    subscriptions.length && <div className="container">
                        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                            {
                                subscriptions.map(subscription => (
                                    <Fragment key={subscription.id}>
                                        <div className="col">
                                            <Subscription subscription={subscription}/>
                                        </div>
                                    </Fragment>
                                ))
                            }
                        </div>
                    </div>
                }
            </>
        )
    } else {
        return <></>
    }
}