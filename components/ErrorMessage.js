export default function ErrorMessage({text}) {
    if (text) {
        return (
            <>
                    <div>
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