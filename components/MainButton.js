export default function MainButton({title, action}) {
    return (
        <>
            <button
                className="bg-white hover:bg-sky-500 rounded-xl shadow-lg p-6 hover:text-white"
                onClick={action}>
                {title}
            </button>
        </>
    );
}
