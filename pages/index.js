import Header from "@components/Header";
import ConnectionBar from "@components/ConnectionBar";
import SubscriptionList from "@components/SubscriptionList";

export default function Home() {
    return (
        <>
            <Header text="Welcome to the Ontrack Customer Portal!"/>
            <SubscriptionList/>
            <ConnectionBar/>
        </>
    )
}
