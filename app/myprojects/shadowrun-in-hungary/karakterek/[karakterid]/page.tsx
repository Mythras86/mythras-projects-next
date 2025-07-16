import cl from "./page.module.scss";
import { getOneKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import { notFound } from "next/navigation";
import { KarakterDto } from "../../store/karakter.dto";
import React from "react";
import Karakter from "./components/Karakter";
import LoadingSpinner from "@/components/spinners/LoadingSpinner";

interface Params {
  params: Promise<{ karakterid: string }>;
  props: any;
}

export async function generateMetadata({params}: Params) {
  const param = await params;
  const charMetadata: KarakterDto | undefined = await getOneKarakter(param.karakterid);
  
  if (charMetadata) {
    return {
      title: charMetadata.szuletesiNev,
      description: 'none'
    };
  } else {
    notFound();
  }
  
}

export default async function KarakterPage({params, props}: Params) {
  const param = await params;
  const karakter: KarakterDto | undefined = await getOneKarakter(param.karakterid);

  return (
    <main className={cl.karakter}>
      <h1>{karakter?.szuletesiNev}</h1>
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