import { useSelector } from 'react-redux';
import cl from './Tulajdonsag.module.scss';
import { ITulajdonsagokData } from "../store/tulajdonsagokData";
import { dnsData, IDns } from '../../Jellemzok/Jellemzo/store/dataDns';

interface Props {
  tulajdonsag: ITulajdonsagokData;
  tulajdonsagErtek: number;
  contClass?: string;
}

export default function Tulajdonsag({tulajdonsag, tulajdonsagErtek, contClass}: Props) {
    
    const charDns = useSelector<string>((state: any) => state.shadowrunKarakter.dns);
    
    function getTulModosito(): number {
        const dns: IDns = dnsData.find(x=>x.dns === charDns)!;

        if (dns.tulajndonsagMod.find(x=>x.nev === tulajdonsag.key)) {
            const tulMod = dns.tulajndonsagMod.find(x=>x.nev === tulajdonsag.key);
            return tulMod!.ertek;
        }
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