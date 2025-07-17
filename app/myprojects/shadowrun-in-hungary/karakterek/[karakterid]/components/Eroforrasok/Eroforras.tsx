interface Props {
    ertekClass?: string;
    alapErtek: number;
    kapottErtek: number;
    felhasznaltErtek: number;
}

export default function Eroforras({ertekClass = 'neonWhite text0', alapErtek, kapottErtek, felhasznaltErtek}: Props) {

    return (
        <section className="flexcont w100">
            <div className={ertekClass}>Alap : {alapErtek}</div>
            <div className={ertekClass}>Kapott : {kapottErtek}</div>
            <div className={ertekClass}>Elköltött : {felhasznaltErtek}</div>
        </section>
    );
}