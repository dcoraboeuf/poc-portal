export default function ErrorMessage({text}) {
    if (text) {
        return (
            <>
                    <div className="alert alert-danger my-4" role="alert">
                        {text}
                    </div>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}