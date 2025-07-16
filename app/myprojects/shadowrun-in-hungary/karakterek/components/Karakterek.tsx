'use client';

import { deleteKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import Button from "@/components/Button/Button";
import Collapsible from "@/components/Collapsible/Collapsible";
import { useSelector } from "react-redux";
import { IKarakterek } from "../page";
import { useRouter } from "next/navigation";
import Selectable from "@/components/Selectableh/Selectable";

interface Props {
    karakterek: IKarakterek[];
}

export default function Karakterek({karakterek}: Props) {

    const selected = useSelector((state:any) => state.selected.id)
    const router = useRouter();

    function torol(_id: string) {
        deleteKarakter(_id);
    }

    function megtekintes(id: string) {
        router.push('/myprojects/shadowrun-in-hungary/karakterek/'+id)
    }

    return (
        <>
        {karakterek.map(karakter =>
            <Selectable key={karakter._id} className="flexCont bg-black border-white" selectId={karakter._id}>
                <Collapsible isVisible={selected === karakter._id} 
                containerClass="flexCont w100"
                summaryClass="flexCont w100"
                summary={
                    <>
                    <div className="neonGreen text2 flex1">{karakter.szuletesiNev}</div>
                    <div className="neonWhite text2 flex1">{karakter.szuletesiNem}</div>
                    </>
                }
                expandedClass="buttonCont margTop1 margBott1"
                expanded={
                    <>
                    <Button iconType={"yes"} onClick={()=>megtekintes(karakter._id)} >
                        Megtekintés
                    </Button>
                    <Button type={"submit"} iconType={"no"} onClick={()=>torol(karakter._id)}>Törlés</Button>
                    </>
                }>
                </Collapsible>
            </Selectable>
        )}
        </>
    );
}