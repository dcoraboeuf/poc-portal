import Header from "@components/Header";
import {useRouter} from "next/router";
import MainButton from "@components/MainButton";

export default function SubscriptionSuccess() {
    const router = useRouter();
    const name = router.query.name
    const url = `https://${name}.ontrack.run`;
    return (
        <>
            <Header text="Subscription created"/>

            <p>
                Thanks a lot for your subscription.
            </p>

            <p>
                Your Ontrack instance should be available in the next hour
                at <a className="underline decoration-sky-500" href={url}>{url}</a>.
            </p>

            <p>
                <MainButton title="Back home" action={() => router.push("/")}/>
            </p>
        </>
    )
}