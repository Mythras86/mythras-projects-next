import "./page.scss";
import { Metadata } from "next";
import { getKarakterek } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";
import ButtonUjKarakter from "./components/ButtonUjKarakter";
import Karakterek from "./components/Karakterek";

export interface IKarakterek {
  _id: string;
  szuletesiNev: string;
  tulajdonosEmail: string;
  szuletesiNem: string;
  dns: string;
  foglalkozas: string;
}

export const metadata: Metadata = {
  title: 'Karakterek',
  description: 'Karakterek'
};

export default async function KarakterekPage() {

  const karakterek: IKarakterek[] = await getKarakterek();
  const tulajdonosok: string[] = [...new Set(karakterek.map(x=>x.tulajdonosEmail))];

  return (
    <main id='karakterek'>
      <h1>Karakterek</h1>
      
      <ButtonUjKarakter></ButtonUjKarakter>

      {tulajdonosok.map(tulajdonos=>
      <LoadingSpinner key={tulajdonos} isLoading={karakterek === undefined}>
        <section className="w100 margBott1">
          <h2>{tulajdonos}</h2>
          <Karakterek karakterek={karakterek.filter(x=>x.tulajdonosEmail === tulajdonos)}></Karakterek>
        </section>
      </LoadingSpinner>
      )}

    </main>
  );
}