import Header from "@components/Header";
import MainButtonBar from "@components/MainButtonBar";
import CancelButton from "@components/CancelButton";

export default function SubscriptionCreation() {
    return (
        <>
            <Header text="New subscription"/>
            <span>Creation of subscription</span>
            <MainButtonBar>
                <CancelButton/>
            </MainButtonBar>
        </>
    )
}
