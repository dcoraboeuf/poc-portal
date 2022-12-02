import MainButton from "@components/MainButton";
import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";

export default function SignupButton() {
    const { signup } = useContext(AuthContext);
    return <MainButton title="Sign up" action={signup}/>
}
