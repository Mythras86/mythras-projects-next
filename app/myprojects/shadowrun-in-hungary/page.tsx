import Link from "next/link";
import { linkData } from "./link.data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Shadowrun In Hungary',
};

export default function ShadowrunInHungary() {
    return (
        <main>
          <h1>Shadowrun In Hungary</h1>
        
          {linkData.map(data => 
            <Link key={data.id} href={"/"+data.id}>
              <div className='neonOrange text2 center margBott1' >
                {data.nev}
              </div>
            </Link>
          )}

        </main>
    );
}