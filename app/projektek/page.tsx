"use client"

import Link from 'next/link';
import { projectData } from './projektData';
import "./Projektek.scss";

export default function Projektek() {

    return (
      <main id='projektekCont'>
        <title>Projektek</title>
        <h1>Projektek</h1>
        
          {projectData.map(data => 
            <div className='margBott1' key={data.id}>
              <Link 
              
              href={"/"+data.id}
              >
                {data.nev}
              </Link>
            </div>
          )}
      </main>
    );
}