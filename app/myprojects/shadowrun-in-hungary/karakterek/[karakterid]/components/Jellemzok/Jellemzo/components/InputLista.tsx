'use client';

import useSelectId from "@/lib/hooks/useSelectMe";


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

    const {selectedId, toggleSelectId, getSelectedClass} = useSelectId();

    function selectOne(value: any) {
        toggleSelectId(value);
        selected(value);
    }

    return (
        <div className={className}>
            {lista.map((e: any) =>
                <div 
                key={e} 
                className={classNameElem+' '+(getSelectedClass(e === selectedId))}
                onClick={()=>selectOne(e)}
                >{e}</div>
            )}
        </div>
    );
}