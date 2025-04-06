import Link from "next/link";
import { linkData } from "./link.data";

export default function ShadowrunInHungary() {
    return (
        <main>
        <title>Shadowrun In Hungary</title>
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