'use client';

interface IGameDetail {
    label: string;
    className?: string;
    data: any;
}

export default function GameDetail({label, className ="neonBlue text2 flex1", data}: IGameDetail) {

    return (
        <div className={className}>
            <div>{label}: </div>
            <div className="center">{data}</div>
        </div>
    );
}