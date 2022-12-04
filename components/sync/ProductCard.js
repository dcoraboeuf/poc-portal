import {useState} from "react";

export default function ProductCard({product, selected, onSelection}) {
    return (
        <>
            <button
                onClick={onSelection}
                className={`
                    rounded-xl shadow-lg p-6 mr-6
                    hover:bg-sky-500
                    hover:text-white
                    ${selected ? 'bg-green-300' : undefined}
                `}>
                <div className="font-bold">
                    {product.name}
                </div>
                <div>
                    {product.description}
                </div>
            </button>
        </>
    )
}