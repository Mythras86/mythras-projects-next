import Link from "next/link";
import "./page.scss";
import { KarakterDto } from "../store/karakter.dto";

let karakterek: Array<KarakterDto> = [];

export default function Karakterek() {
    return (
      <main id='karakterek'>
        <title>Karakterek</title>
        <h1>Karakterek</h1>

        <Link href={'karakterek/ujkarakter'}>
          <button className="neonGreen text2 center">
            Új karakter
          </button>
        </Link>


        {karakterek.map((karakter)=>
          <div>{karakter.szuletesiNev}</div>
        )}
      </main>
    );
}