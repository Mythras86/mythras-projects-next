'use client';

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
        router.push('/myprojects/shadowrun-in-hungary')
    }

    return (
        <LoadingSpinner isLoading={isLoading}>

        <div className="buttonCont">
            <button type='button' className="no text2 center" onClick={vissza}>Vissza</button>

            {mentesFeltetel && karakter &&
                <button type='button' className="yes text2 center" onClick={mentes}>Karakter Mentése</button>
            }
        </div>

        </LoadingSpinner>
    );
}