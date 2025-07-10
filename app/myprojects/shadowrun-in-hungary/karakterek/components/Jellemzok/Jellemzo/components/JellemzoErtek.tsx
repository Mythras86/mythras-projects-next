interface Props {
    ertek: any;
    egyseg?: string;
    className?: string;
}

export default function JellemzoMegjegyzes({ertek, egyseg, className = 'neonGrey text0 center'}: Props) {
    return (
        <div className={className}>
          {egyseg ? ertek+' '+egyseg : ertek}
        </div>
    );
}