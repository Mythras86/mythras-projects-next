"use client"

import Link from 'next/link';
import { projectData } from './projekt.data';
import "./page.scss";

export default function Projektek() {

    return (
      <main id='projektekCont'>
        <title>Projektek</title>
        <h1>Projektek</h1>
        
          {projectData.map(data => 
            <Link key={data.id} href={"/"+data.id}>
              <div className='neonOrange text2 center margBott1' >
                {data.nev}
              </div>
            </Link>
          )}
      </main>
    );
}