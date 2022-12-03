import Header from "@components/Header";
import MainButtonBar from "@components/MainButtonBar";
import CancelButton from "@components/CancelButton";
import {Fragment, useEffect, useState} from "react";
import SubmitButton from "@components/SubmitButton";

export default function SubscriptionCreation() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function getProducts() {
            const res =  await fetch('/.netlify/functions/sync-get-products', {
                method: 'POST'
            });
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

            <p>Choose the name for your instance:</p>
            <p>The URL of your Ontrack installation will be <code>https://`name`.ontrack.run</code></p>

            <form method="post">
                <label>
                    Instance name:
                    <input type="text" required={true} className="
                        form-control
                        block
                        w-100
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        my-2
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "/>
                </label>
            </form>

            <MainButtonBar>
                <SubmitButton/>
                <CancelButton/>
            </MainButtonBar>
        </>
    )
}
