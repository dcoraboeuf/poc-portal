export default function PortalCard({header, title, body}) {
    return (
        <div className="card mb-4 rounded-3 shadow-sm h-100">
            <div className="card-header py-3">
                <h4 className="my-0 fw-normal">
                    {header}
                </h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {body}
            </div>
        </div>
    )
}