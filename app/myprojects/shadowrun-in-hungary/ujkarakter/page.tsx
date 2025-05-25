import { jellemzokUtil, IJellemzok } from "../components/jellemzok/data.jellemzok";
import Jellemzo from "../components/jellemzok/jellemzo/Jellemzo";

export default function Ujkarakter() {
  return (
    <main id='ujkarakter'>
      <h1>Új Karakter</h1>
      <form id='jellemzok'>
        <h1 className="margBott1">Jellemzők</h1>
        {jellemzokUtil.filter(x=>x.szerkesztes == false).map((jellemzo: IJellemzok)=>(
          <Jellemzo key={jellemzo.key} jellemzo={jellemzo}>
          </Jellemzo>
        ))}
      </form>

    </main>
  );
}