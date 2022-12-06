export default function MainButton({title, action}) {
    return (
        <>
            <button
                onClick={action}>
                {title}
            </button>
        </>
    );
}
