import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../contexts/authContext";
import Subscription from "@components/Subscription";
import ProductGroup from "@components/sync/ProductGroup";
import Link from "next/link";

export default function SubscriptionUpgrade({subscriptionId}) {
    const {user} = useContext(AuthContext);
    // Loading the subscription and the eligible products from the Portal API
    const [subscription, setSubscription] = useState(null);
    const [products, setProducts] = useState([]);
    const [upgradedCount, setUpgradedCount] = useState(0);
    useEffect(() => {
        async function getSubscription() {
            if (user && subscriptionId) {
                const res = await fetch(`/.netlify/functions/sync-get-subscription?customerId=${user.user_metadata.stripe_customer_id}&subscriptionId=${subscriptionId}`);
                if (res.ok) {
                    const loadedSubscription = await res.json();
                    setSubscription(loadedSubscription);
                    // Loading the products
                    const pres = await fetch('/.netlify/functions/sync-get-products');
                    if (pres.ok) {
                        const allProducts = await pres.json();
                        // Gets only products whose license level is > subscription product level
                        const eligibleProducts = allProducts.filter(product => {
                            return product.licenseLevel > loadedSubscription.product.licenseLevel;
                        });
                        setProducts(eligibleProducts);
                    } else {
                        throw new Error(`Failed to fetch the list of available products (code = ${pres.status}).`);
                    }
                } else {
                    throw new Error(`Failed to fetch a subscription (code = ${res.status}).`);
                }
            }
        }

        // noinspection JSIgnoredPromiseFromCall
        getSubscription();
    }, [user, upgradedCount]);

    const [selectedPrice, setSelectedPrice] = useState();
    const [upgradeMessage, setUpgradeMessage] = useState("");

    const onPriceSelected = (price) => {
        setSelectedPrice(price);
    };

    const launchUpgrade = async () => {
        if (selectedPrice && subscription) {
            const res = await fetch(`/.netlify/functions/stripe-upgrade-subscription?subscriptionId=${subscriptionId}&priceId=${selectedPrice.id}`);
            if (res.ok) {
                setUpgradedCount(upgradedCount + 1)
                setUpgradeMessage("The subscription has been adapted.");
            } else {
                throw new Error(`Cannot upgrade the subscription.`);
            }
        }
    };

    return (
        <div className="container">

            {
                upgradeMessage && <div className="mt-3 alert alert-success">
                    {upgradeMessage}
                    <div>
                        <Link href="/">
                            <button className="btn btn-primary">
                                Home page
                            </button>
                        </Link>
                    </div>
                </div>
            }

            <p className="fs-5 text-muted my-4">
                (1) Subscription to upgrade
            </p>
            {
                subscription ? <Subscription subscription={subscription} showOptions={false}/> : undefined
            }
            <p className="fs-5 text-muted my-4">
                (2) Choose the plan to upgrade to
            </p>

            {
                products && <ProductGroup
                    products={products}
                    initialPrice={null}
                    onPriceSelected={onPriceSelected}
                />
            }

            <div>
                <button
                    disabled={!selectedPrice}
                    onClick={launchUpgrade}
                    className="btn btn-primary">
                    Upgrade plan
                </button>
                <Link href="/">
                    <button className="btn btn-link">
                        Cancel
                    </button>
                </Link>
            </div>
        </div>
    )
}