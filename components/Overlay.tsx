import "./Overlay.scss";

interface IOverlay {
    children: React.ReactNode;
    className?: string;
    showMe?: boolean
}

export default function Overlay({className, showMe = true, children}: IOverlay) {

    return (
        <>
        {showMe &&
            <div className={`overlayCont ${className}`}>
                {children}
            </div>
        }
        </>
    );
}