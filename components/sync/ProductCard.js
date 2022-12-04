import {Fragment} from "react";

export default function ProductCard({product, selectedPrice, onPriceSelected}) {
    return (
        <>
            <div
                className={`
                    rounded-xl shadow-lg p-6
                    hover:bg-sky-800
                    hover:text-white
                    ${selectedPrice && selectedPrice.product === product.id ? 'bg-green-300' : undefined}
                `}>
                <div className="font-bold">
                    {product.name}
                </div>
                <div>
                    {product.description}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    {
                        product.prices.map(price =>
                            <Fragment key={price.id}>
                                <button
                                    onClick={() => onPriceSelected(price)}
                                    className={`
                                        rounded-xl shadow-lg p-6
                                        hover:bg-sky-500
                                        hover:text-white
                                        ${selectedPrice && selectedPrice.id === price.id ? 'bg-sky-300' : undefined}
                                    `}>
                                    {price.representation}
                                </button>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        </>
    )
}