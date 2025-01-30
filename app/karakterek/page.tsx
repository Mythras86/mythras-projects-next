import Link from "next/link";
import { IKarakterek } from "./karakterek.model";
import "./karakterek.scss";

let karakterek: Array<IKarakterek> = [];

export default function Karakterek() {
    return (
      <main id='karakterek'>
        <title>Karakterek</title>
        <h1>Karakterek</h1>

        <Link href={'karakterek/ujkarakter'}>
          <button>
            Új karakter
          </button>
        </Link>


        {karakterek.map((karakter)=>
          <div>{karakter.nev}</div>
        )}
      </main>
    );
}