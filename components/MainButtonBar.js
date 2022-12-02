export default function MainButtonBar({children}) {
    return (
        <>
            <div className="flex justify-left gap-5">
                {children}
            </div>
        </>
    )
}
