export default function FormTemplate({children, onSubmit}) {
    return (
        <>
                <form onSubmit={onSubmit}>
                    {children}
                </form>
        </>
    )
}