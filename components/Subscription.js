import PortalCard from "@components/common/PortalCard";
import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";
import {useRouter} from "next/router";
import Link from "next/link";

export default function Subscription({subscription, showOptions}) {

    const {user} = useContext(AuthContext);

    const billingPortal = async () => {
        const customerId = user.user_metadata.stripe_customer_id;
        const bpsParams = {
            customer_id: customerId,
            return_url: `${window.location.origin}`,
        };
        const bpsURL = new URL(`${window.location.origin}/.netlify/functions/stripe-billing-portal-session`);
        for (let k in bpsParams) {
            bpsURL.searchParams.append(k, bpsParams[k]);
        }
        const bpsRes = await fetch(bpsURL);
        if (!bpsRes.ok) {
            throw new Error(`Cannot start the Stripe billing portal session.`);
        }
        const bpsInfo = await bpsRes.json();
        // Redirects to the Stripe billing portal URL
        window.location = bpsInfo.billingPortal.url;
    };

    return <PortalCard
        header={
            <>
                <a href={`https://${subscription.provisioningName}.ontrack.run`}
                   target="_blank">{subscription.provisioningName}</a>
            </>
        }
        title={subscription.product.name}>
        <p className="text-muted mt-3 mb-4">
            {subscription.product.description}
        </p>
        <p className="text-muted fw-light">{subscription.price.representation}</p>
        <p className="text-muted fw-light">Valid until <span
            className="fw-bold">{new Date(subscription.currentPeriodEnd * 1000).toLocaleString()}</span></p>
        {
            subscription.cancelAtPeriodEnd ? <div className="alert alert-danger">
                This subscription will stop automatically at the end of the validity period.
            </div> : <></>
        }
        {
            !showOptions || showOptions === true ?
                <div className="container text-center mt-4">
                    <div className="row">
                        <div className="col-6">
                            <button
                                onClick={billingPortal}
                                className="btn btn-outline-secondary">
                                <i className="bi-pencil-square"/>
                                &nbsp;
                                Manage
                            </button>
                        </div>
                        <div className="col-6">
                            <Link href={`/subscriptions/upgrade/${subscription.id}`}>
                                <button
                                    type="button"
                                    className="btn btn-outline-success">
                                    <i className="bi-arrow-up-circle"/>
                                    &nbsp;
                                    Upgrade
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                : undefined
        }
    </PortalCard>
}