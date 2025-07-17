'use client';

import Button from "@/components/Button/Button";
import { useState } from "react";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";
import { useRouter } from "next/navigation";


export default function ButtonUjKarakter() {

    const [isLoading, changeLoadingTo] = useState(false);
    const router = useRouter();

    function ujKarakter() {
        changeLoadingTo(true);
        router.push('/myprojects/shadowrun-in-hungary/ujkarakter')
    }

    return (
        <LoadingSpinner isLoading={isLoading}>

        <div className="buttonCont">
            <Button iconType={"yes"} onClick={ujKarakter}>Új Karakter</Button>
        </div>

        </LoadingSpinner>
    );
}