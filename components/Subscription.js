export default function Subscription({subscription}) {
    return (
        <>
            <div>
                <div>{subscription.id}</div>
                <div>{subscription.status}</div>
                <div>{subscription.product.name}</div>
                <div>{subscription.price.representation}</div>
                <div><a href="https://{subscription.price.provisioningName}.ontrack.run">{subscription.price.provisioningName}</a></div>
            </div>
        </>
    )
}