import cl from "./page.module.scss";
import { getOneKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import { notFound } from "next/navigation";
import { KarakterDto } from "../../store/karakter.dto";
import React from "react";
import Karakter from "./components/Karakter";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";

interface Params {
  params: Promise<{ karakterid: string }>;
}

export async function generateMetadata({params}: Params) {
  const karakterid = (await params).karakterid;
  const charMetadata: KarakterDto | undefined = await getOneKarakter(karakterid);
  
  if (charMetadata) {
    return {
      title: charMetadata.szuletesiNev,
      description: 'none'
    };
  } else {
    notFound();
  }
  
}

export default async function KarakterPage({params}: Params) {
  const karakterid = (await params).karakterid;
  const karakter: KarakterDto | undefined = await getOneKarakter(karakterid);

  return (
    <main className={cl.karakter}>
      <h1 className="reverseTeal">{karakter?.szuletesiNev}</h1>

      <div className="neonWhite text0 w100">Létrehozás dátuma: {karakter?.letrehozasDatum}</div>

      <LoadingSpinner isLoading={!karakter}>
        {karakter ? 
          <Karakter karakter={karakter}></Karakter>
          :
          notFound()
        }
      </LoadingSpinner>
    </main>
  );
}