export default function SubmitButton({enabled, text}) {
    return (
        <>
            <button
                type="submit"
                disabled={enabled !== null && !enabled}
                className="
                    bg-white rounded-xl shadow-lg p-6 text-black
                    hover:bg-green-500 hover:text-white
                    disabled:bg-gray-100 disabled:text-gray-300
                    disabled:hover:bg-gray-100 disabled:hover:text-gray-300
                ">
                { text ? text : "Submit" }
            </button>
        </>
    );
}
