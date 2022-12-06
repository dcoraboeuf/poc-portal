export default function Subscription({subscription}) {
    return (
        <>
            <div className="container flex flex-row">
                <div className="basis-1">{subscription.id}</div>
                <div className="basis-1">{subscription.status}</div>
                <div className="basis-1">{subscription.product.name}</div>
                <div className="basis-1">{subscription.price.representation}</div>
                <div className="grow"><a href="https://{subscription.price.provisioningName}.ontrack.run">{subscription.price.provisioningName}</a></div>
            </div>
        </>
    )
}