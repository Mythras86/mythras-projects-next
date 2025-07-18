import React from 'react';
import './Collapsible.module.scss';

interface Props {
    isVisible: boolean;
    containerClass?: string;
    summary?: React.ReactNode;
    collapsed?: React.ReactNode;
    expanded: React.ReactNode;
}

export default function Collapsible({
    isVisible,
    containerClass,
    summary,
    collapsed,
    expanded,
}: Props) {
    return (
        <div className={containerClass}>
        {/* the head summary, thats always visible if present */}
        {summary &&
        <>{summary}</>
        }
        {!isVisible && collapsed &&
            <>{collapsed}</>
        }
        {isVisible && expanded &&
            <>{expanded}</>
        }
        </div>
    );
}