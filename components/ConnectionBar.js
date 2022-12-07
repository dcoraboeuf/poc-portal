import MainButtonBar from "@components/MainButtonBar";
import LoginButton from "@components/LoginButton";
import SignupButton from "@components/SignupButton";
import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";
import CustomerName from "@components/CustomerName";
import LogoutButton from "@components/LogoutButton";
import SubscriptionCreationButton from "@components/SubscriptionCreationButton";

export default function ConnectionBar() {
    const {user} = useContext(AuthContext);
    return (
        <>
            { user && <CustomerName/> }
            { !user && <LoginButton/> }
            { !user && <SignupButton/> }
            {/*<MainButtonBar>*/}
            {/*    <div className="btn-group me-2" role="group" aria-label="Subscription commands">*/}
            {/*        {user && <SubscriptionCreationButton/>}*/}
            {/*    </div>*/}
            {/*    <div className="btn-group me-2" role="group" aria-label="Logout commands">*/}
            {/*        {user && <LogoutButton/>}*/}
            {/*    </div>*/}
            {/*</MainButtonBar>*/}
        </>
    )
}
