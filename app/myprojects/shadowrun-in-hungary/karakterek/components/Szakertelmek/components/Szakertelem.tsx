import React from "react";
import { SzakertelemDto } from "../store/szakertelem.dto";

const Szakertelem: React.FC<SzakertelemDto> = (props) => {
    return (
        <div>{props.nev}</div>
    );
}

export default Szakertelem;