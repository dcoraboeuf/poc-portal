import Header from "./Header";


export default function Page({title, children}) {
    return (
        <>
            <div className="p-6">
                <Header title={title}></Header>
                {children}
            </div>
        </>
    )
}
