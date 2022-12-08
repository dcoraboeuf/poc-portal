import ProductCard from "@components/sync/ProductCard";
import {Fragment, useState} from "react";

export default function ProductGroup({products, initialPrice, onPriceSelected}) {
    const [selectedPrice, setSelectedPrice] = useState(initialPrice);
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 mb-3 text-center g-3">
                {products.map(product =>
                    <Fragment key={product.id}>
                        <div className="col">
                            <ProductCard
                                product={product}
                                selectedPrice={selectedPrice}
                                onPriceSelected={(price) => {
                                    setSelectedPrice(price)
                                    if (onPriceSelected) onPriceSelected(price)
                                }}
                            />
                        </div>
                    </Fragment>
                )}
            </div>
        </div>
    )
}