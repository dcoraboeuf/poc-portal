import {useContext} from "react";
import {AuthContext} from "../contexts/authContext";

export default function CustomerName() {
    const {user} = useContext(AuthContext);
    return (
        <>
            <button className="bg-green-800 rounded-xl shadow-lg p-6 text-white">
                {user.user_metadata.full_name}&nbsp;({user.email})
            </button>

        </>
    )
}