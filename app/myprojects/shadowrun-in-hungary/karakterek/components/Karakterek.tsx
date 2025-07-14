'use client';

import { getKarakterek } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import Button from "@/components/Button/Button";
import Collapsible from "@/components/Collapsible/Collapsible";
import Selectable from "@/components/Selectable/Selectable";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";
import Link from "next/link";
import { useEffect, useState } from "react";
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
                        <Collapsible isVisible={selected === e._id} 
                        containerClass="flexCont w100"
                        summaryClass="neonGreen text2 center flex1"
                        summary={
                            <>
                            {e.szuletesiNev}
                            </>
                        }
                        expandedClass="buttonCont margTop1 margBott1"
                        expanded={
                            <>
                            <Link href={'/myprojects/shadowrun-in-hungary/karakterek/'+e._id}>
                                <Button iconType={"yes"}>Megtekintés</Button>
                            </Link>
                            <Button iconType={"edit"}>Szerkesztés</Button>
                            <Button iconType={"no"}>Törlés</Button>
                            </>
                        }>
                            
                        </Collapsible>
                    </Selectable>

                )}
                </div>
            )}
        </LoadingSpinner>
    );
}