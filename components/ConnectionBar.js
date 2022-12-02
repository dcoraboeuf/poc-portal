import MainButtonBar from "@components/MainButtonBar";
import LoginButton from "@components/LoginButton";
import SignupButton from "@components/SignupButton";
import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";

export default function ConnectionBar() {
    const {user} = useContext(AuthContext);
    return (
        <>
            <MainButtonBar>
                {user && user.user_metadata.full_name}
                {!user && <LoginButton/>}
                {!user && <SignupButton/>}
            </MainButtonBar>
        </>
    )
}
