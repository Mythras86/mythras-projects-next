interface Props {
    szoveg: string;
    ertek: number;
}

export default function TulajdonsagReszlet({szoveg, ertek}: Props) {
    return(
        <div className='w100 text0 neonGrey center'>
            {szoveg}: {ertek}
        </div>
    );
}