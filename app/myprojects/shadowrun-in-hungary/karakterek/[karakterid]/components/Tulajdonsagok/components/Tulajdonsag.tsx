import { useSelector } from 'react-redux';
import { TulajdonsagModel } from '../store/tulajdonsag.model';
import Selectable from '@/components/Selectable/Selectable';
import Collapsible from '@/components/Collapsible/Collapsible';
import Button from '@/components/Button/Button';
import TulajdonsagReszlet from './TulajdonsagReszlet';

interface Props {
  tulajdonsag: TulajdonsagModel;
  tulajdonsagErtek: number;
}

export default function Tulajdonsag({tulajdonsag, tulajdonsagErtek}: Props) {
    
    const selected = useSelector<string>((state: any) => state.selected.id);
    
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

    const tulajdonsagTeljesErtek = tulajdonsagErtek +getTulModosito() +getDnsModosito() + getNemModosito();

    return (
        <Selectable selectId={tulajdonsag.rovidites} className="flexCont w100 bg-black">
            <Collapsible containerClass='flexCont w100'
            isVisible={selected === tulajdonsag.rovidites} 
            summary={
                <div className="flexCont w100">
                    <div className="flex1 text2 neonWhite">
                        {tulajdonsag.nev}
                    </div>
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
                <div className='buttonCont margTop1 margBott1'>
                    <Button iconType={'yes'}>Szintlépés</Button>
                </div>
            </div>                
            }>
            </Collapsible>
        </Selectable>

    );
}