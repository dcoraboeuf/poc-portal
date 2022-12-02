import MainButton from "@components/MainButton";
import {AuthContext} from "../contexts/authContext";
import {useContext} from "react";

export default function LogoutButton() {
    const {logout} = useContext(AuthContext);
    return <MainButton title="Logout" action={logout}/>
}
