import PortalCard from "@components/common/PortalCard";

export default function Subscription({subscription}) {
    return <PortalCard
        header={
            <>
                <a href={`https://${subscription.provisioningName}.ontrack.run`}
                   target="_blank">{subscription.provisioningName}</a>
                <a href="https://dashboard.stripe.com/test"
                   title="Manage subscription"
                   className="text-decoration-none ms-2">
                    <i className="bi-pencil-square fs-5"/>
                </a>
            </>
        }
        title={subscription.product.name}>
        <p className="text-muted mt-3 mb-4">
            {subscription.product.description}
        </p>
        <p className="text-muted fw-light">{subscription.price.representation}</p>
        <p className="text-muted fw-light">Valid until <span
            className="fw-bold">{new Date(subscription.currentPeriodEnd * 1000).toLocaleString()}</span></p>
    </PortalCard>
}