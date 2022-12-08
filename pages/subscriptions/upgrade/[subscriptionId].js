import {useRouter} from "next/router";
import SubscriptionUpgrade from "@components/SubscriptionUpgrade";

export default function SubscriptionUpgradePage() {
    const router = useRouter()
    const {subscriptionId} = router.query
    return <SubscriptionUpgrade subscriptionId={subscriptionId}/>
}