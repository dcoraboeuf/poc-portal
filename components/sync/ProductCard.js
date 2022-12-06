import {Fragment} from "react";

export default function ProductCard({product, selectedPrice, onPriceSelected}) {
    return (
        <>
            <div>
                <div>
                    {product.name}
                </div>
                <div>
                    {product.description}
                </div>
                <div>
                    {
                        product.prices.map(price =>
                            <Fragment key={price.id}>
                                <button
                                    onClick={() => onPriceSelected(price)}
                                    >
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