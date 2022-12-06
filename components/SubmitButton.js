export default function SubmitButton({enabled, text}) {
    return (
        <>
            <button
                type="submit"
                disabled={enabled !== null && !enabled}
                >
                { text ? text : "Submit" }
            </button>
        </>
    );
}
