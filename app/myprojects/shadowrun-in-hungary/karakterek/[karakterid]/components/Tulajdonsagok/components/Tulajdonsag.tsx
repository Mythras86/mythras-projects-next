import { useDispatch, useSelector } from 'react-redux';
import { TulajdonsagModel } from '../store/tulajdonsag.model';
import Collapsible from '@/components/Collapsible/Collapsible';
import Button from '@/components/Button/Button';
import TulajdonsagReszlet from './TulajdonsagReszlet';
import { karakterActions } from '@/app/myprojects/shadowrun-in-hungary/store/karakter.slice';
import useSelectId from '@/lib/hooks/useSelectMe';
import KarmaField from '@/app/myprojects/shadowrun-in-hungary/components/specialFields/KarmaField';
import useManageResources from '@/lib/hooks/useManageResources';

interface Props {
    tulajdonsagKey: string;
    tulajdonsag: TulajdonsagModel;
}

export default function Tulajdonsag({tulajdonsagKey, tulajdonsag}: Props) {

    const {selectedId, toggleSelectId, getSelectedClass} = useSelectId();
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

    function getKarmaKoltseg() {
        const cost = ((tulajdonsagErtek / 2) * (2 * 5 + (tulajdonsagErtek - 1) * 5))-((tulajdonsag.min / 2) * (2 * 5 + (tulajdonsag.min - 1) * 5))
        return cost;
    }

    const tulajdonsagTeljesErtek = tulajdonsagErtek +getTulModosito() +getDnsModosito() + getNemModosito();

    return (
        <Collapsible containerClass={`flexCont w100 ${getSelectedClass(tulajdonsag.rovidites === selectedId)}`}
        isVisible={selectedId === tulajdonsag.rovidites} 
        summary={
            <div className={`flexCont w100 ${getSelectedClass(tulajdonsag.rovidites === selectedId)}`} onClick={()=>toggleSelectId(tulajdonsag.rovidites)}>
                <div className="flex1 text2 neonWhite">
                    {tulajdonsag.nev}
                </div>
                <KarmaField children={getKarmaKoltseg()} className='flex0 text2'></KarmaField>
                <div className="text2 neonGreen">
                    {tulajdonsagTeljesErtek}
                </div>
            </div>
        }
        expanded={
        <div className='flexCont w100'>
            <TulajdonsagReszlet szoveg={'Maximum'} ertek={tulajdonsag.max}></TulajdonsagReszlet>
            <TulajdonsagReszlet szoveg={'Módosítók'} ertek={getTulModosito()}></TulajdonsagReszlet>
            <TulajdonsagReszlet szoveg={'DNS Módosító'} ertek={getDnsModosito()}></TulajdonsagReszlet>
            <TulajdonsagReszlet szoveg={'Nem Módosító'} ertek={getNemModosito()}></TulajdonsagReszlet>
            {tulajdonsagErtek < tulajdonsag.max &&
            <div className='buttonCont'>
                <Button iconType={'yes'} onClick={()=>szintLepes()}>Szintlépés</Button>
            </div>
            }
        </div>                
        }>
        </Collapsible>
    );
}