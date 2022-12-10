export default function LoadingComponent({loading, loadingMessage, children}) {
    return (
        loading ? <>
            <div className="alert alert-secondary text-muted">
                <span className="spinner-border spinner-border-sm"></span>
                <span className="ms-2">{loadingMessage}</span>
            </div>
        </> : <>
            {children}
        </>
    )
}