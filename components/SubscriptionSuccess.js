import {useContext, useEffect, useState} from "react";
import ProductGroup from "@components/sync/ProductGroup";
import FormTemplate from "@components/common/FormTemplate";
import {AuthContext} from "../contexts/authContext";
import LoadingComponent from "@components/common/LoadingComponent";
import {EnvContext} from "../contexts/envContext";

export default function SubscriptionSuccess({name}) {

    const {domain} = useContext(EnvContext);

    const url = `https://${name}.${domain}`;

    return (
        <>

            <div className="py-3 pb-md-4 mx-auto">
                <h1 className="display-4 fw-normal">Thanks a lot for your subscription.</h1>
            </div>

            <p className="fs-5 text-muted my-4">
                Your Ontrack instance should be available in the next hour
                at <a href={url}>{url}</a>.
            </p>

        </>
    );
}