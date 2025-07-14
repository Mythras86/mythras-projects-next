'use client';

import { getKarakterek } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import Button from "@/components/Button/Button";
import Expand from "@/components/Expand/Expand";
import Selectable from "@/components/Selectable/Selectable";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";
import { MouseEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

export interface IKarakterek {
    _id: string;
    szuletesiNev: string;
    tulajdonosEmail: string;
}

export default function Karakterek() {

    const [isLoading, setLoading] = useState(true);
    const [karakterek, changeKarakterek] = useState<IKarakterek[]>([]);
    const selected = useSelector((state: any) => state.selected.id)

    
    useEffect(() => {
        async function getData() {
            try {
            const fetchedData: IKarakterek[] = await getKarakterek();
            changeKarakterek(fetchedData);
            setLoading(false);
            } catch(error) {
            throw error;
            }
        }
        getData();
    }, [])

    function megtekint() {}

    function szerkeszt() {}

    function torol() {}

    const tulajdonosok: string[] = karakterek.map(x=>x.tulajdonosEmail);
  
    return (
        <LoadingSpinner isLoading={isLoading}>

            {tulajdonosok.map(e=>
                <div key={e} className="w100">
                <h2 >{e}</h2>
                {karakterek.filter(x=>x.tulajdonosEmail === e).map(e=>
                    <Selectable key={e._id} className="flexCont bg-black border-white" selectId={e._id}>
                        <div className="neonGreen text2 center">
                            {e.szuletesiNev}
                        </div>
                        <Expand isVisible={selected === e._id} className={'buttonCont margTop1'}>
                            <Button iconType={"yes"} fnOnClick={megtekint}>Megtekintés</Button>
                            <Button iconType={"edit"} fnOnClick={szerkeszt}>Szerkesztés</Button>
                            <Button iconType={"no"} fnOnClick={torol}>Törlés</Button>
                        </Expand>
                    </Selectable>

                )}
                </div>
            )}
        </LoadingSpinner>
    );
}