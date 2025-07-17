'use client';

import Button from "@/components/Button/Button";
import { KarakterDto } from "../store/karakter.dto";
import { saveKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import { useState } from "react";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";
import { useRouter } from "next/navigation";

interface Props {
    karakter?: KarakterDto;
    mentesFeltetel?: boolean;
}

export default function ButtonKarakterControl({karakter, mentesFeltetel = true}: Props) {

    const [isLoading, changeLoadingTo] = useState(false);
    const router = useRouter();

    function mentes() {
        changeLoadingTo(true);
        if (karakter) {
            saveKarakter(karakter);
        }
    }
    
    function vissza() {
        changeLoadingTo(true);
        router.push('/myprojects/shadowrun-in-hungary/karakterek')
    }

    return (
        <LoadingSpinner isLoading={isLoading}>

        <div className="buttonCont">
            <Button iconType={"no"}
            onClick={vissza}
            >Vissza</Button>

            {mentesFeltetel && karakter &&
                <Button iconType={"yes"} onClick={mentes}>Karakter Mentése</Button>
            }
        </div>

        </LoadingSpinner>
    );
}