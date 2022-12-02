import MainButtonBar from "@components/MainButtonBar";
import LoginButton from "@components/LoginButton";
import SignupButton from "@components/SignupButton";
import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";
import CustomerName from "@components/CustomerName";

export default function ConnectionBar() {
    const {user} = useContext(AuthContext);
    return (
        <>
            <MainButtonBar>
                {!user && <LoginButton/>}
                {!user && <SignupButton/>}
                {user && <CustomerName/>}
            </MainButtonBar>
        </>
    )
}
