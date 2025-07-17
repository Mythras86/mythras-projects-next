import cl from './Tulajdonsag.module.scss';
import { useSelector } from 'react-redux';
import { TulajdonsagModel } from '../store/tulajdonsag.model';
import Selectable from '@/components/Selectable/Selectable';
import Collapsible from '@/components/Collapsible/Collapsible';

interface Props {
  tulajdonsag: TulajdonsagModel;
  tulajdonsagErtek: number;
  contClass?: string;
}

export default function Tulajdonsag({tulajdonsag, tulajdonsagErtek, contClass}: Props) {
    
    const selected = useSelector<string>((state: any) => state.selected.id);
    
    function getTulModosito(): number {
        // const dns: IDns = dnsData.find(x=>x.dns === charDns)!;

        return 0;
    }

    return (
        <Selectable selectId={tulajdonsag.rovidites} className="flexCont w100">
            <Collapsible 
            isVisible={selected === tulajdonsag.rovidites} 
            summary={
                <div className="text0 neonWhite">
                    {tulajdonsag.nev}
                </div>
            }
            expanded={
            <>
                <div className='text0 neonGrey center'>
                    max: {tulajdonsag.max}
                </div>
                <div className='text0 neonGrey center'>
                    {getTulModosito()}
                </div>
                <div className="text0 neonGreen center">
                    {tulajdonsagErtek + getTulModosito()}
                </div>
            </>                
            }>
            </Collapsible>
        </Selectable>

    );
}