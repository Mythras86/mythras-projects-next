import cl from './Tulajdonsag.module.scss';
import { useSelector } from 'react-redux';
import { TulajdonsagModel } from '../store/tulajdonsag.model';

interface Props {
  tulajdonsag: TulajdonsagModel;
  tulajdonsagErtek: number;
  contClass?: string;
}

export default function Tulajdonsag({tulajdonsag, tulajdonsagErtek, contClass}: Props) {
    
    const charDns = useSelector<string>((state: any) => state.shadowrunKarakter.dns);
    
    function getTulModosito(): number {
        // const dns: IDns = dnsData.find(x=>x.dns === charDns)!;

        return 0;
    }

    return (
        <div className={cl.tulajdonsagCont+' '+contClass}>

            <div className="text0 neonWhite">
                {tulajdonsag.nev}
            </div>
            <div className='text0 neonGrey center'>
                max: {tulajdonsag.max}
            </div>
            <div className='text0 neonGrey center'>
                {getTulModosito()}
            </div>
            <div className="text0 neonGreen center">
                {tulajdonsagErtek + getTulModosito()}
            </div>
        </div>
    );
}