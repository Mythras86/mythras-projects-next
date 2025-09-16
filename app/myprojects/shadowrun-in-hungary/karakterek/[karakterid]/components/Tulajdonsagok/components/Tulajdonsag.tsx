import { useDispatch, useSelector } from 'react-redux';
import { TulajdonsagModel } from '../store/tulajdonsag.model';
import Collapsible from '@/components/Collapsible/Collapsible';
import TulajdonsagReszlet from './TulajdonsagReszlet';
import { karakterActions } from '@/app/myprojects/shadowrun-in-hungary/store/karakter.slice';
import useManageResources from '@/lib/hooks/useManageResources';

interface Props {
    tulajdonsagKey: string;
    tulajdonsag: TulajdonsagModel;
}

export default function Tulajdonsag({tulajdonsagKey, tulajdonsag}: Props) {

    const res = useManageResources();
    
    const tulajdonsagErtek = useSelector((state: any) => state.shadowrunKarakter[tulajdonsagKey]);

    const dispatch = useDispatch();
    
    function getTulModosito(): number {
        // const dns: IDns = dnsData.find(x=>x.dns === charDns)!;
        return 0;
    }

    function getDnsModosito(): number {
        // const dns: IDns = dnsData.find(x=>x.dns === charDns)!;
        return 0;
    }

    function getNemModosito(): number {
        // const dns: IDns = dnsData.find(x=>x.dns === charDns)!;
        return 0;
    }

    function szintLepes() {
        dispatch(karakterActions.szerkesztes({
            targetKey: tulajdonsagKey,
            ertek: tulajdonsagErtek+1
        }));
        res.payByKarma((tulajdonsagErtek+1)*5);
    }

    function getKarmaKoltseg(ertek: number): number {
        const cost = ((ertek / 2) * (2 * 5 + (ertek - 1) * 5))-((tulajdonsag.min / 2) * (2 * 5 + (tulajdonsag.min - 1) * 5));
        return cost;
    }

    const tulajdonsagTeljesErtek = tulajdonsagErtek +getTulModosito() +getDnsModosito() + getNemModosito();

    return (
        <Collapsible
            selectId={tulajdonsagKey}
            summaryHead={tulajdonsag.nev}
            summaryHeadClass={'flex1 text2 neonWhite'}
            summary={
            <>
                <div className='karma text2'>{getKarmaKoltseg(tulajdonsagErtek)}</div>
                <div className="text2 neonGreen">
                    {tulajdonsagTeljesErtek}
                </div>
            </>
            }
            expanded={<div className='flexCont w100'>
                <TulajdonsagReszlet szoveg={'Maximum'} ertek={tulajdonsag.max}></TulajdonsagReszlet>
                <TulajdonsagReszlet szoveg={'Módosítók'} ertek={getTulModosito()}></TulajdonsagReszlet>
                <TulajdonsagReszlet szoveg={'DNS Módosító'} ertek={getDnsModosito()}></TulajdonsagReszlet>
                <TulajdonsagReszlet szoveg={'Nem Módosító'} ertek={getNemModosito()}></TulajdonsagReszlet>
                {tulajdonsagErtek < tulajdonsag.max &&
                    <div className='buttonCont'>
                        <button type='button' onClick={() => szintLepes()}>
                            Szintlépés
                        </button>
                    </div>}
            </div>}>
        </Collapsible>
    );
}