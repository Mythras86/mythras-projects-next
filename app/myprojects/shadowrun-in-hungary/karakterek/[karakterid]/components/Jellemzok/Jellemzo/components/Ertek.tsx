import { INPTIPUS } from "../../util/const-INPTIPUS";

interface Props {
    ertek: any;
    tipus: string;
    egyseg?: string;
    className?: string;
}

export default function Ertek({ertek, tipus, egyseg, className = 'neonGrey text0 center'}: Props) {
    return (
        <>
        {tipus !== INPTIPUS.number && tipus !== INPTIPUS.color &&
        <div className={className} style={{backgroundColor: ertek}}>
        {ertek}
        </div>
        }

        {tipus === INPTIPUS.number &&
        <div className={className}>
        {ertek} {egyseg}
        </div>
        }

        {tipus === INPTIPUS.color &&
        <div className={className} style={{backgroundColor: ertek}}>
        {ertek} {egyseg}
        </div>
        }
        </>
    );
}