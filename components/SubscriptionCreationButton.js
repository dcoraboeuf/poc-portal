import Link from "next/link";

export default function SubscriptionCreationButton() {
    return (
        <>
            <Link href="/subscriptions/creation">
                <button
                    className="bg-white hover:bg-sky-500 rounded-xl shadow-lg p-6 hover:text-white">
                    New subscription
                </button>
            </Link>
        </>
    );
}
