import React from 'react';
import './Collapsible.module.scss';

interface Props {
    isVisible: boolean;
    containerClass?: string;
    summary?: React.ReactNode;
    summaryClass?: string;
    collapsed?: React.ReactNode;
    collapsedClass?: string;
    expanded: React.ReactNode;
    expandedClass?: string;
}

export default function Collapsible({
    isVisible,
    containerClass,
    summary,
    summaryClass,
    collapsed,
    collapsedClass,
    expanded,
    expandedClass,
}: Props) {
    return (
        <div className={containerClass}>
        {/* the head summary, thats always visible if present */}
        {summary &&
            <div className={summaryClass}>{summary}</div>
        }
        {!isVisible && collapsed &&
            <div className={collapsedClass}>{collapsed}</div>
        }
        {isVisible && expanded &&
            <div className={expandedClass}>{expanded}</div>
        }
        </div>
    );
}