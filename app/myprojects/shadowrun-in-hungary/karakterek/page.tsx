import "./page.scss";
import { Metadata } from "next";
import Karakterek from "./components/Karakterek";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { getKarakterek } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";

export interface IKarakterek {
  _id: string;
  szuletesiNev: string;
  tulajdonosEmail: string;
  szuletesiNem: string;
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
      <Link href={"/myprojects/shadowrun-in-hungary/ujkarakter"} className="center margBott1">
        <Button iconType={"yes"}>Új Karakter</Button>
      </Link>

      {tulajdonosok.map(tulajdonos=>
      <LoadingSpinner key={tulajdonos} isLoading={karakterek === undefined}>
        <div className="flexCont w100">
          <h2>{tulajdonos}</h2>
          <Karakterek karakterek={karakterek.filter(x=>x.tulajdonosEmail === tulajdonos)}></Karakterek>
        </div>
      </LoadingSpinner>
      )}

    </main>
  );
}