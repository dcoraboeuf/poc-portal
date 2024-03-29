import {AuthContext} from "../contexts/authContext";
import {Fragment, useContext, useEffect, useState} from "react";
import Subscription from "@components/Subscription";
import PortalCard from "@components/common/PortalCard";
import Link from "next/link";
import LoadingComponent from "@components/common/LoadingComponent";

export default function SubscriptionList() {
    const {user} = useContext(AuthContext);
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function getSubscriptions() {
            if (user) {
                console.log({user});
                const res = await fetch(`/.netlify/functions/sync-get-subscriptions?customerId=${user.app_metadata.stripe_customer_id}`);
                if (res.ok) {
                    const data = await res.json();
                    setSubscriptions(data);
                    setLoading(false);
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
                <div className="p-3 pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-normal">Subscriptions</h1>
                    <p className="fs-5 text-muted">
                        List of your existing subscriptions.
                    </p>
                </div>
                <div className="container">
                    <LoadingComponent loading={loading} loadingMessage="Loading your subscriptions...">
                        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center g-4">
                            {/* Loading indicator */}
                            {/* One card per subscription */}
                            {
                                subscriptions.map(subscription => (
                                    <Fragment key={subscription.id}>
                                        <div className="col">
                                            <Subscription subscription={subscription}/>
                                        </div>
                                    </Fragment>
                                ))
                            }
                            {/* New subscription */}
                            {
                                <div className="col">
                                    <PortalCard
                                        header={
                                            <span>New subscription</span>
                                        }
                                        title={""}>
                                        <p className="text-muted fw-light">Create a new Ontrack instance.</p>
                                        <Link href="/subscriptions/creation">
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                            >
                                                New subscription
                                            </button>
                                        </Link>
                                    </PortalCard>
                                </div>
                            }
                        </div>
                    </LoadingComponent>
                </div>
            </>
        )
    } else {
        return <></>
    }
}