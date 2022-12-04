import ProductCard from "@components/sync/ProductCard";
import {Fragment, useState} from "react";

export default function ProductGroup({products, initialProductId, onSelectionChanged}) {
    const [selectedProductId, setSelectedProductId] = useState(initialProductId);
    return (
        <div className="flex justify-left my-6">
            {products.map(product =>
                <Fragment key={product.id}>
                    <ProductCard
                        product={product}
                        selected={ product.id === selectedProductId }
                        onSelection={() => {
                            setSelectedProductId(product.id);
                            if (onSelectionChanged) onSelectionChanged(product.id);
                        }}
                    />
                </Fragment>
            )}
        </div>
    )
}