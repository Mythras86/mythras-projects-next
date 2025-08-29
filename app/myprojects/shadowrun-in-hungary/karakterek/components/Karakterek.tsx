'use client';

import { deleteKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import Button from "@/components/Button/Button";
import Collapsible from "@/components/Collapsible/Collapsible";
import { IKarakterek } from "../page";
import { useRouter } from "next/navigation";
import useSelectId from "@/lib/hooks/useSelectMe";

interface Props {
    karakterek: IKarakterek[];
}

export default function Karakterek({karakterek}: Props) {

    const {selectedId, toggleSelectId, getSelectedClass} = useSelectId();

    const router = useRouter();

    function torol(_id: string) {
        karakterek = karakterek.filter(x=>x._id !== _id)
        deleteKarakter(_id);
    }

    function megtekintes(id: string) {
        router.push('/myprojects/shadowrun-in-hungary/karakterek/'+id)
    }

    return (
        <>
        {karakterek.map(karakter =>
            <Collapsible key={karakter._id} isVisible={selectedId === karakter._id} 
            containerClass={`flexCont w100 bg-black margBott1 ${getSelectedClass(selectedId === karakter._id)}`}
            summary={
                <div className={`flexCont ${getSelectedClass(selectedId === karakter._id)}`} onClick={()=>toggleSelectId(karakter._id)}>
                    <div className="neonGreen text2 flex1">{karakter.szuletesiNev}</div>
                    <div className="neonWhite text2 flex0">{karakter.szuletesiNem}</div>
                    <div className="neonWhite text2 flex0">{karakter.dns}</div>
                    <div className="neonWhite text2 flex0">{karakter.foglalkozas}</div>
                </div>
            }
            expanded={
                <div className="buttonCont">
                    <Button iconType={"yes"} onClick={()=>megtekintes(karakter._id)}>Megtekintés</Button>
                    <Button type={"submit"} iconType={"no"} onClick={()=>torol(karakter._id)}>Törlés</Button>
                </div>
            }>
            </Collapsible>
        )}
        </>
    );
}