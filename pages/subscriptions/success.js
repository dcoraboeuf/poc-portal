import {useRouter} from "next/router";
import SubscriptionSuccess from "@components/SubscriptionSuccess";

export default function SubscriptionSuccessPage() {
    const router = useRouter();
    const name = router.query.name
    return (
        <>

            <div className="container">

                <SubscriptionSuccess name={name}></SubscriptionSuccess>

                <p>
                    <button
                        onClick={() => router.push("/")}
                        className="btn btn-primary">
                        Back
                    </button>
                </p>

            </div>
        </>
    )
}