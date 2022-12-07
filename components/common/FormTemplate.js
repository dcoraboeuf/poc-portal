import {useState} from "react";
import ErrorMessage from "@components/common/ErrorMessage";

export default function FormTemplate({children, onSubmit}) {
    const [formError, setFormError] = useState(null);

    const wrappedOnSubmit = async (event) => {
        try {
            setFormError(null);
            await onSubmit(event);
        } catch (e) {
            setFormError(e.message);
        }
    };

    return (
        <>
                <form onSubmit={wrappedOnSubmit}>
                    {children}
                    <ErrorMessage text={formError}/>
                </form>
        </>
    )
}