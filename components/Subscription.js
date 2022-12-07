export default function Subscription({subscription}) {
    return <div className="card mb-4 rounded-3 shadow-sm">
        <div className="card-header py-3">
            <h4 className="my-0 fw-normal">
                <a href="https://{subscription.provisioningName}.ontrack.run">{subscription.provisioningName}</a>
            </h4>
        </div>
        <div className="card-body">
            <h5 className="card-title pricing-card-title">{subscription.product.name}</h5>
            <p className="text-muted mt-3 mb-4">
                {subscription.product.description}
            </p>
            <p className="text-muted fw-light">{subscription.price.representation}</p>
            {/*<button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>*/}
        </div>
    </div>
}