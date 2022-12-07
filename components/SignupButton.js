import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";

export default function SignupButton() {
    const { signup } = useContext(AuthContext);
    return <button type="button" className="btn btn-warning" onClick={signup}>Sign-up</button>;
}
