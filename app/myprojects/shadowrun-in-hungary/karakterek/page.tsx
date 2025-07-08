import Link from "next/link";
import "./page.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Karakterek',
  description: 'Karakterek'
};

export default function KarakterekComp() {
    return (
      <main id='karakterek'>
        <h1>Karakterek</h1>

        <Link href={'karakterek/ujkarakter'}>
          <button className="neonGreen text2 center">
            Új karakter
          </button>
        </Link>


      </main>
    );
}