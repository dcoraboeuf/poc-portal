import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";

export default function CustomerName() {
    const {user} = useContext(AuthContext);
    return (
        <>
            <button>
                {user.user_metadata.full_name}&nbsp;({user.email})
            </button>

        </>
    )
}