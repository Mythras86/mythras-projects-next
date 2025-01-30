import Detail from "./jellemzo/jellemzo";
import { IJellemzok, jellemzokUtil } from "./data.jellemzok";

export default function Details() {
    return (
      <form id='jellemzok'>
        <h1 className="margBott1">Jellemzők</h1>
        {jellemzokUtil.map((jellemzo: IJellemzok)=>(
          <Detail key={jellemzo.key} jellemzo={jellemzo}>
          </Detail>
        ))}
      </form>
    );
}