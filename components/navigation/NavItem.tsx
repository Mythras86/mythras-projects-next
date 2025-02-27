import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface INavItem {
    href: string;
    text: string;
    props?: React.ReactNode;
}

export default function NavItem({href, text, ...props}: INavItem) {

    const path = usePathname();

    return (
        <li>
            <Link
            href={href}
            className={`text2 center hover ${path.startsWith('/'+href) ? 'reverseWhite' : 'neonWhite hover'}`}
            {...props}>
                {text}
            </Link>
        </li>
    );
}