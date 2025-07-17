import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import Jellemzo from "../../Jellemzok/Jellemzo/Jellemzo";
import { IdentitasDto } from "../../Jellemzok/store/jellemzok.identitas.dto";
import { OroksegDto } from "../../Jellemzok/store/jellemzok.orokseg.dto";
import { PszicheDto } from "../../Jellemzok/store/jellemzok.psziche.dto";
import { getJellemzo } from "../../Jellemzok/util/getJellemzo";
import { AsztalisTulDto, FizikaiTulDto, SpecialisTulkDto, TulajdonsagokDto } from "../store/tulajdonsagok.dto";
import { TulajdonsagokModel } from "../store/tulajdonsag.model";
import Tulajdonsag from "./Tulajdonsag";

interface Props {
    fejlec: string;
    dataKeys: string[];
    data: TulajdonsagokModel<FizikaiTulDto> | TulajdonsagokModel<AsztalisTulDto> | TulajdonsagokModel<SpecialisTulkDto>;
    karakter: KarakterDto;
}

export default function TulajdonsagSection({fejlec, data, dataKeys, karakter}: Props) {
    return (
        <>
        <h2 className="neonBlue">{fejlec}</h2>
        <div className="flexCont margBott1 w100 center">
            {dataKeys.map((dataKey: string) =>
            <Tulajdonsag 
            key={dataKey} 
            tulajdonsag={data[dataKey as keyof (FizikaiTulDto | AsztalisTulDto | SpecialisTulkDto )]} 
            tulajdonsagErtek={karakter[dataKey as keyof (FizikaiTulDto | AsztalisTulDto | SpecialisTulkDto )]}></Tulajdonsag>
            )}
        </div>
        </>
    );
}