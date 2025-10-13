'use client';

import { deleteKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import Collapsible from "@/components/Collapsible/Collapsible";
import { IKarakterek } from "../page";
import { useRouter } from "next/navigation";

interface Props {
    karakterek: IKarakterek[];
}

export default function Karakterek({karakterek}: Props) {

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
            <Collapsible key={karakter._id} selectId={karakter._id}
            summary={karakter.szuletesiNev}
            summaryClass={"neonPurple text2 w100"}
            summaryExtra={
            <>
                <div className="neonWhite text1 flex1 center">{karakter.szuletesiNem}</div>
                <div className="neonWhite text1 flex1 center">{karakter.dns}</div>
                <div className="neonWhite text1 flex1 center">{karakter.foglalkozas}</div>
            </>
            }>
                <div className="buttonCont neonWhite">
                    <button type="button" className="yes text1" onClick={()=>megtekintes(karakter._id)}>Megtekintés</button>
                    <button type="submit" className="no text1" onClick={()=>torol(karakter._id)}>Törlés</button>
                </div>
            </Collapsible>
        )}
        </>
    );
}