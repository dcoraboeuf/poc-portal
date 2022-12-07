// @deprecated
export default function MainButton({title, action}) {
    return (
        <>
            <button
                className="btn btn-light"
                onClick={action}>
                {title}
            </button>
        </>
    );
}
