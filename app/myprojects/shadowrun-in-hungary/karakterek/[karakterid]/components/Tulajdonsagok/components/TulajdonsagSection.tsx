import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import { AsztalisTulDto, FizikaiTulDto, SpecialisTulkDto } from "../store/tulajdonsagok.dto";
import { TulajdonsagokModel } from "../store/tulajdonsag.model";
import Tulajdonsag from "./Tulajdonsag";

interface Props {
    fejlec: string;
    dataKeys: string[];
    data: TulajdonsagokModel<FizikaiTulDto> | TulajdonsagokModel<AsztalisTulDto> | TulajdonsagokModel<SpecialisTulkDto>;
    karakter: KarakterDto;
}

export default function TulajdonsagSection({fejlec, data, dataKeys}: Props) {

    return (
        <>
        <h2 className="neonBlue">{fejlec}</h2>
        <section className="flexCont margBott1 w100">
            {dataKeys.map((dataKey: string) =>
            <Tulajdonsag
            key={dataKey}
            tulajdonsagKey={dataKey}
            tulajdonsag={data[dataKey as keyof (FizikaiTulDto | AsztalisTulDto | SpecialisTulkDto )]} 
            />
            )}
        </section>
        </>
    );
}