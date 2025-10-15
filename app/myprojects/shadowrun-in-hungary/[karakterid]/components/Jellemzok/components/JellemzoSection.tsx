import Jellemzo from "../Jellemzo/Jellemzo";
import { IdentitasDto } from "../store/jellemzok.identitas.dto";
import { OroksegDto } from "../store/jellemzok.orokseg.dto";
import { PszicheDto } from "../store/jellemzok.psziche.dto";
import { getJellemzo } from "../util/getJellemzo";
import { JellemzokModel } from "../store/jellemzo.model";
import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";

interface Props {
    fejlec: string;
    dataKeys: string[];
    data: JellemzokModel<OroksegDto> | JellemzokModel<IdentitasDto> | JellemzokModel<PszicheDto>;
    karakter: KarakterDto;
}

export default function JellemzoSection({fejlec, data, dataKeys, karakter}: Props) {
    return (
        <>
        <h2 className="neonBlue">{fejlec}</h2>
        <div className="flexRow margBott1 w100 center">
            {dataKeys.map((dataKey: string) =>
                <Jellemzo 
                key={dataKey}
                jellemzo={getJellemzo(
                dataKey,
                data[dataKey as keyof (OroksegDto | IdentitasDto | PszicheDto)],
                karakter[dataKey as keyof (OroksegDto | IdentitasDto | PszicheDto)]
                )}
                ></Jellemzo>
            )}
        </div>
        </>
    );
}