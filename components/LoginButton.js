import {AuthContext} from "../contexts/authContext";
import {useContext} from "react";

export default function LoginButton() {
    const { login } = useContext(AuthContext);
    return <button type="button" className="btn btn-outline-light me-2" onClick={login}>Login</button>
}
