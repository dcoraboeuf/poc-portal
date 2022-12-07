import {AuthContext} from "../contexts/authContext";
import {useContext} from "react";

export default function LogoutButton() {
    const {logout} = useContext(AuthContext);
    return <button type="button" className="btn btn-warning me-2" onClick={logout}>Logout</button>;
}
