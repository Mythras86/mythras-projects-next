import "./page.scss";
import Link from 'next/link';
import { projectData } from './projekt.data';
import Image from "next/image";
import underContruction from '@/public/assets/underConstruction.png';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'My Projects',
};

export default function Projektek() {

  return (
    <main id='projectsCont'>
      <h1>My Projects</h1>
      
        {projectData.map(data => 

          <Link className="margBott1" key={data.id} href={'/myprojects/'+data.id}>
            <h2 className='neonOrange'>{data.name}</h2>
            <div className="imageCont border-orange bg-black">
              {data.img && 
                <Image src={data.img} alt={data.alt} />
              }
              {!data.img && 
                <Image src={underContruction} alt={'Porject is under construction'} />
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