import Link from "next/link";

export default function CancelButton() {
    return (
        <>
            <Link href="/">
                <button
                    className="bg-white hover:bg-sky-500 rounded-xl shadow-lg p-6 hover:text-white">
                    Cancel
                </button>
            </Link>
        </>
    );
}
