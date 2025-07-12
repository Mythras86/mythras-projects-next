import SelectableComp from "@/components/selectable/Selectable";

interface Props {
    lista: Array<any>;
    className?: string;
    classNameElem?: string;
    selected: (e: any) => void;
}

export default function InputLista({
    lista, 
    selected, 
    className = "flexCont",
    classNameElem = 'neonPurple text0 center w100'
}: Props) {
    return (
        <div className={className}>
            {lista.map((e: any) =>
                <SelectableComp selectAction={()=>selected(e)} key={e} className={classNameElem} selectId={e}>{e}</SelectableComp>
            )}
        </div>
    );
}