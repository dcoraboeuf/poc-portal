import ProductCard from "@components/sync/ProductCard";
import {Fragment, useState} from "react";

export default function ProductGroup({products, initialPrice, onPriceSelected}) {
    const [selectedPrice, setSelectedPrice] = useState(initialPrice);
    return (
        <div>
            {products.map(product =>
                <Fragment key={product.id}>
                    <ProductCard
                        product={product}
                        selectedPrice={selectedPrice}
                        onPriceSelected={(price) => {
                            setSelectedPrice(price)
                            if (onPriceSelected) onPriceSelected(price)
                        }}
                    />
                </Fragment>
            )}
        </div>
    )
}