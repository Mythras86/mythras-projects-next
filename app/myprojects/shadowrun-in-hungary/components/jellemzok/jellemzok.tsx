import { IJellemzok, jellemzokUtil } from "./data.jellemzok";
import Jellemzo from "./jellemzo/Jellemzo";

export default function Jellemzok() {
    return (
      <form id='jellemzok'>
        <h1 className="margBott1">Jellemzők</h1>
        {jellemzokUtil.map((jellemzo: IJellemzok)=>(
          <Jellemzo key={jellemzo.key} jellemzo={jellemzo} />
        ))}
      </form>
    );
}