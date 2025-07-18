import { SzakertelemModel } from "../../karakterek/[karakterid]/components/Szakertelmek/store/szakertelem.model";

interface Props {
    item: SzakertelemModel;
}

export default function Eszkoz({item}: Props) {
    return (
        <div className="neonWhite text0">{item.nev}</div>
    );
}