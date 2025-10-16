'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
interface Props {
    href: string;
    children: React.ReactNode;
    liClassName?: string;
    aClassName?: string;
    aColor?: string;
    aColorSelected?: string;
}

export default function NavItem({href, children, liClassName, aClassName = 'text2 center', aColor = 'neonPurple hover', aColorSelected = 'reversePurple'}: Props) {

    const path = usePathname();

    function getColor() {
        if (path === href) {
            return aColorSelected;
        }
        return aColor;
    }

    return (
        <li className={liClassName}>
            <Link
            href={href}
            className={aClassName+' '+getColor()}>
                {children}
            </Link>
        </li>
    );
}