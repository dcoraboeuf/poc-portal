import {useRouter} from "next/router";

export default function SubscriptionSuccess() {
    const router = useRouter();
    const name = router.query.name
    const url = `https://${name}.ontrack.run`;
    return (
        <>

            <div className="container">

                <div className="py-3 pb-md-4 mx-auto">
                    <h1 className="display-4 fw-normal">Thanks a lot for your subscription.</h1>
                </div>

                <p className="fs-5 text-muted my-4">
                    Your Ontrack instance should be available in the next hour
                    at <a href={url}>{url}</a>.
                </p>

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