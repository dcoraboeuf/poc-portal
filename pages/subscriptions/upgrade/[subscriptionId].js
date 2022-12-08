import {useRouter} from "next/router";

export default function SubscriptionUpgradePage() {
    const router = useRouter()
    const { subscriptionId } = router.query
    return (
        <>
            Upgrade page for {subscriptionId}
        </>
    );
}