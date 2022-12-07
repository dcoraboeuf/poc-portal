export default function PortalCard({header, headerClass, title, children}) {
    return (
        <div className="card mb-4 rounded-3 shadow-sm h-100">
            <div className={`card-header py-3 ${headerClass ? headerClass : undefined}`}>
                <h4 className="my-0 fw-normal">
                    {header}
                </h4>
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {children}
            </div>
        </div>
    )
}