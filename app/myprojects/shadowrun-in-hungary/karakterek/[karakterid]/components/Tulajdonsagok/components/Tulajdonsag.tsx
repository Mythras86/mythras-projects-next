import { useDispatch, useSelector } from 'react-redux';
import { TulajdonsagModel } from '../store/tulajdonsag.model';
import Collapsible from '@/components/Collapsible/Collapsible';
import TulajdonsagReszlet from './TulajdonsagReszlet';
import { karakterActions } from '@/app/myprojects/shadowrun-in-hungary/store/karakter.slice';
import useManageResources from '@/lib/hooks/useManageResources';
import useDns from '../../../hooks/useDns';

interface Props {
    tulajdonsagKey: string;
    tulajdonsag: TulajdonsagModel;
}

export default function Tulajdonsag({tulajdonsagKey, tulajdonsag}: Props) {

    const res = useManageResources();
    const {dns, getDnsModosito} = useDns();
    
    const tulajdonsagErtek = useSelector((state: any) => state.shadowrunKarakter[tulajdonsagKey]);

    const dispatch = useDispatch();
    
    function getTulModosito(): number {
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

    const tulajdonsagTeljesErtek = tulajdonsagErtek +getTulModosito() +getDnsModosito(tulajdonsagKey);

    return (
        <Collapsible
        selectId={tulajdonsagKey}
        summary={tulajdonsag.nev + ' ' + tulajdonsagErtek + '/' + tulajdonsag.max}
        summaryClass={'flex1 text2 neonWhite'}
        summaryExtra={
            <>
            <div className='karma text2'>{getKarmaKoltseg(tulajdonsagErtek)}</div>
            <div className="text2 szint">
                {tulajdonsagTeljesErtek}
            </div>
            </>}
        expandedHead={tulajdonsag.nev}
        expandHeadClass={'margTop1 flex1 text2 neonWhite'}>
            {<div className='flexCont w100'>
            <TulajdonsagReszlet szoveg={'Maximum Szint'} ertek={tulajdonsag.max}></TulajdonsagReszlet>
            <TulajdonsagReszlet szoveg={'Szint'} ertek={tulajdonsagErtek}></TulajdonsagReszlet>
            <TulajdonsagReszlet szoveg={'Módosítók'} ertek={getTulModosito()}></TulajdonsagReszlet>
            <TulajdonsagReszlet szoveg={'DNS Módosító'} ertek={getDnsModosito(tulajdonsagKey)}></TulajdonsagReszlet>
            {tulajdonsagErtek < tulajdonsag.max &&
                <div className='buttonCont neonWhite margBott1'>
                    <button type='button' className='bg-black' onClick={() => szintLepes()}>
                        <span className='yes text1 center'>Szintlépés:</span>
                        <span className='karma text1'>{(tulajdonsagErtek + 1) * 5}</span>
                    </button>
                </div>}
        </div>}
        </Collapsible>
    );
}