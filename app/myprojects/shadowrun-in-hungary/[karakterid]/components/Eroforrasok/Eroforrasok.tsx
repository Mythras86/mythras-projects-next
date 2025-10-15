import Eroforras from "./Eroforras";
import useManageResources from "@/lib/hooks/useManageResources";

export default function Eroforrasok() {
    
    const res = useManageResources();

    return(
        <main>
            <h1>Erőforrások</h1>
            <Eroforras 
            headText={'Karma'} 
            headClass={'neonPurple'}
            labelClass="text1 neonWhite flex0 center"            
            alapErtek={<span className='karma flex1 text1'>{res.karmaAlap}</span>}
            kapottErtek={<span className='karma flex1 text1'>{res.karmaKapott}</span>}
            felhasznaltErtek={<span className='karma flex1 text1'>{res.karmaFelhasznalt}</span>}
            egyenleg={<span className='karma reverse flex1 text1'>{res.osszesKarma}</span>} 
            ></Eroforras>

            <Eroforras 
            headText={'Tőke'} 
            headClass={'neonOrange'}            
            labelClass="text1 neonWhite flex0 center"            
            alapErtek={<span className='toke flex1 text1'>{res.tokeAlap}</span>}
            kapottErtek={<span className='toke flex1 text1'>{res.tokeKapott}</span>}
            felhasznaltErtek={<span className='toke flex1 text1'>{res.tokeFelhasznalt}</span>}
            egyenleg={<span className='toke reverse flex1 text1'>{res.osszesToke}</span>} 
            ></Eroforras>
        </main>
    );
}