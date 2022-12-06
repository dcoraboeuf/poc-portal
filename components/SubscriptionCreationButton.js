import Link from "next/link";

export default function SubscriptionCreationButton() {
    return (
        <>
            <Link href="/subscriptions/creation">
                <button
                    >
                    New subscription
                </button>
            </Link>
        </>
    );
}
