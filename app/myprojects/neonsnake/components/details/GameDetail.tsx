interface IGameDetail {
    label: string;
    className?: string;
    data: any;
}

export default function GameDetail({label, className ="neonBlue text2", data}: IGameDetail) {

    return (
            <div className={className}>{label}: {data}</div>
    );
}