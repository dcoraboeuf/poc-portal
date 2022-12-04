export default function ProductCard({product}) {
    return (
        <>
            <div>
                <div className="font-bold">
                    {product.name}
                </div>
                <div>
                    {product.description}
                </div>
            </div>
        </>
    )
}