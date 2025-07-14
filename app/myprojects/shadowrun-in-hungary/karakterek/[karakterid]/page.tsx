import { getOneKarakter } from "@/app/api/projects/shadowrunInHungary/karakter.route";
import "./page.scss";
import { notFound } from "next/navigation";
import { KarakterDto } from "../../store/karakter.dto";

interface Params {
  params: any
}

// export async function generateMetadata({params}: Params) {
  
//   const charMetadata: KarakterDto = await getOneKarakter(params.karakterid);

//   if (charMetadata) {
//     notFound();
//   } else {
//     return {
//       title: charMetadata,
//       description: 'none'
//     };
//   }

// }

export default function KarakterComp({params}: Params) {

  return (
    <main id='karakterek'>
      <h1>Karakter</h1>
    </main>
  );
}