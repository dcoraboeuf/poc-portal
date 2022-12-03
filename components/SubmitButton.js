import Link from "next/link";

export default function SubmitButton() {
    return (
        <>
            <button
                onClick={() => alert("Submit")}
                className="bg-white hover:bg-sky-500 rounded-xl shadow-lg p-6 hover:text-white">
                Submit
            </button>
        </>
    );
}
