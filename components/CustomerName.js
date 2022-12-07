import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";

export default function CustomerName() {
    const {user} = useContext(AuthContext);
    return (
        <>
            <span className="navbar-text text-light text-muted pe-4">
                  {user.user_metadata.full_name}
            </span>

        </>
    )
}