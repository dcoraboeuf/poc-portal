import {Fragment} from "react";
import PortalCard from "@components/common/PortalCard";

export default function ProductCard({product, selectedPrice, onPriceSelected}) {
    return (
        <PortalCard
            header={product.name}
            title={""}>
            <div>
                <div className="text-muted">
                    {product.description}
                </div>
                <div className="btn-group m-4">
                    {
                        product.prices.map(price =>
                            <Fragment key={price.id}>
                                <button
                                    onClick={() => onPriceSelected(price)}
                                    className={`
                                    btn
                                    p-3
                                    ${selectedPrice && selectedPrice.id === price.id ? 'btn-success' : 'btn-light'}
                                `}>
                                    {price.representation}
                                </button>
                            </Fragment>
                        )
                    }
                </div>
            </div>
        </PortalCard>
    )
}