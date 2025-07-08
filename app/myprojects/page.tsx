import "./page.scss";
import Link from 'next/link';
import Image from "next/image";
import underContruction from '@/public/images/underConstruction.png';
import { Metadata } from "next";
import { projectData, ProcejtModel } from "./projekt.data";

export const metadata: Metadata = {
  title: 'My Projects',
};

export default function ProjektekComp() {

  return (
    <main id='projectsCont'>
      <h1>My Projects</h1>
      
        {projectData.map((data: ProcejtModel) => 

          <Link className="margBott1" key={data.id} href={'/myprojects/'+data.id}>
            <h2 className='neonOrange'>{data.name}</h2>
            <div className="imageCont border-orange bg-black">
              {data.img && 
                <Image src={data.img} alt={data.alt} placeholder="blur" blurDataURL={data.imgSrc} />
              }
              {!data.img && 
                <Image src={underContruction} alt={'Porject is under construction'} placeholder="blur" 
                blurDataURL='@/public/images/underConstruction.png'/>
              }
            </div>
            <div className="info neonWhite text0 center">
              Type: <span className="color-green">{data.type}</span>
            </div>
            <div className="info neonWhite text0 center">
              Status: <span className="color-green">{data.status}</span>
            </div>
          </Link>
        )}
    </main>
  );
}