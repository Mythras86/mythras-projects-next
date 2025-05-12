"use client"

import "./page.scss";
import Link from 'next/link';
import { projectData } from './projekt.data';
import Image from "next/image";
import underContruction from '@/public/assets/underConstruction.png';

export default function Projektek() {

    return (
      <>
        <title>Projektek</title>
        <main id='projectsCont'>
          <h1>Projektek</h1>
          
            {projectData.map(data => 

              <Link key={data.id} href={'/projects/'+data.id}>
                <h2 className='neonOrange'>{data.name}</h2>
                <div className="project border-orange bg-black margBott1">
                  {data.img && 
                    <Image src={data.img} alt={data.alt} style={{ width: '75%', height: 'auto' }} />
                  }
                  {!data.img && 
                    <Image src={underContruction} alt={'Porject is under construction'} style={{ width: '75%', height: 'auto' }} />
                  }
                  <div className="info">
                    <div className="neonWhite text0">
                      Type: <span className="color-green">{data.type}</span>
                    </div>
                    <div className="neonWhite text0">
                      Status: <span className="color-green">{data.status}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )}
        </main>
      </>
    );
}