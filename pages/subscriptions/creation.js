import Header from "@components/Header";
import MainButtonBar from "@components/MainButtonBar";
import CancelButton from "@components/CancelButton";
import {Fragment, useEffect, useState} from "react";

export default function SubscriptionCreation() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const res =  await fetch('/.netlify/functions/sync-get-products');
            if (res.ok) {
                const data = await res.json();
                setProducts(data);
            } else {
                throw new Error(`Failed to fetch the list of available products (code = ${res.status}).`);
            }
        }
        getProducts();
    }, []);
    return (
        <>
            <Header text="New subscription"/>
            <p>Choose the product you want to subscribe to:</p>
            <div className="flex justify-center">
                {products.map(product =>
                    <Fragment key={product.id}>
                        <div>
                            <div className="font-bold">
                                {product.name}
                            </div>
                            <div>
                                {product.description}
                            </div>
                        </div>
                    </Fragment>
                )}
            </div>
            <MainButtonBar>
                <CancelButton/>
            </MainButtonBar>
        </>
    )
}
