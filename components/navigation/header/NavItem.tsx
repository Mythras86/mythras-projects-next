'use client'

import { isMenuOpenActions } from "@/lib/store/isMenuOpen.slice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

interface Props {
    href: string;
    children: React.ReactNode;
    isMenuOpen: boolean;
    liClassName?: string;
    linkColor?: string;
    linkHover?: string;
}

export default function NavItem({href, children, isMenuOpen, liClassName, linkColor='neonBlue', linkHover='reverseBlue'}: Props) {
    const dispatch = useDispatch();
  
    const closeMenu = () => {
        if (isMenuOpen) {
            dispatch(isMenuOpenActions.closeMenu());
        }
    }
  
    const path = usePathname();

    function highlight(): boolean {
        if (path.endsWith('/') && href === '/') {
            return true
        }
        if (path.startsWith(href) && href !== '/') {
            return true
        }
        return false
    }

    return (
        <li className={`${isMenuOpen ? 'open' : 'closed'} ${liClassName}`} onClick={closeMenu}>
            <Link
            href={href}
            className={`text2 center ${highlight() ? linkHover : linkColor+' hover'}`}>
                {children}
            </Link>
        </li>
    );
}