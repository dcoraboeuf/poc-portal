import MainButton from "@components/MainButton";
import {AuthContext} from "../contexts/authContext";
import {useContext} from "react";

export default function LoginButton() {
    const { login } = useContext(AuthContext);
    return <MainButton title="Login" action={login}/>
}
