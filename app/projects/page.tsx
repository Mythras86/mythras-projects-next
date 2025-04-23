"use client"

import "./page.scss";
import Link from 'next/link';
import { projectData } from './projekt.data';
import Image from "next/image";

export default function Projektek() {

    return (
      <>
        <title>Projektek</title>
        <main id='projektekCont'>
          <h1>Projektek</h1>
          
            {projectData.map(data => 

              <Link key={data.id} href={'/projects/'+data.id}>
                <div className="project neonOrange margBott1">
                  {data.img !== '' &&
                    <Image src={data.img} alt={data.alt}/>
                  }
                  <h2 className='neonOrange text2 center ' >
                    {data.nev}
                  </h2>
                </div>
              </Link>
            )}
        </main>
      </>
    );
}