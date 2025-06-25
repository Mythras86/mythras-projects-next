interface Props {
    label: string;
    className?: string;
    data: any;
}

export default function GameDetail({label, className ="neonBlue text2", data}: Props) {

    return (
            <div className={className}>{label}: {data}</div>
    );
}