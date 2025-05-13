'use client'

import { isMenuOpenActions } from "@/lib/store/isMenuOpen.slice";
import "./NavItem.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";

interface INavItem {
    href: string;
    children: React.ReactNode;
    isMenuOpen: boolean;
    props?: any;
}

export default function NavItem({href, children, isMenuOpen, props}: INavItem) {
    const dispatch = useDispatch();
  
    const closeMenu = () => {
        if (isMenuOpen) {
            dispatch(isMenuOpenActions.closeMenu());
        }
    }
  
    const path = usePathname();

    return (
        <li className={`navCenter ${isMenuOpen ? 'open' : 'closed'}`} onClick={closeMenu}>
            <Link
            href={href}
            className={`text2 center hover ${path.startsWith(href) ? 'reverseBlue' : 'neonBlue hover'}`}
            {...props}>
                {children}
            </Link>
        </li>
    );
}