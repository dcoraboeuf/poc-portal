export default function MainButton({title}) {
    return (
        <>
            <button className="bg-white hover:bg-sky-500 rounded-xl shadow-lg p-6 hover:text-white">
                {title}
            </button>
        </>
    );
}
