export default function MainButtonBar({children}) {
    return (
        <>
            <div className="btn-toolbar" aria-label="All main buttons">
                {children}
            </div>
        </>
    )
}
