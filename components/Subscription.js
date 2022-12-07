import PortalCard from "@components/common/PortalCard";

export default function Subscription({subscription}) {
    return <PortalCard
        header={<a href="https://{subscription.provisioningName}.ontrack.run">{subscription.provisioningName}</a>}
        title={subscription.product.name}
        body={
            <>
                <p className="text-muted mt-3 mb-4">
                    {subscription.product.description}
                </p>
                <p className="text-muted fw-light">{subscription.price.representation}</p>
                <p className="text-muted fw-light">Valid until <span
                    className="fw-bold">{new Date(subscription.currentPeriodEnd * 1000).toLocaleString()}</span></p>
            </>
        }
    />
}