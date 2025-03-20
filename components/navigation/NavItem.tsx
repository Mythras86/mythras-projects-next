import "./NavItem.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavItem {
    href: string;
    children: React.ReactNode;
    isMenuOpen: boolean;
    props?: any;
}

export default function NavItem({href, children, isMenuOpen, props}: INavItem) {

    const path = usePathname();

    return (
        <li className={`navCenter ${isMenuOpen ? 'open' : 'closed'}`}>
            <Link
            href={href}
            className={`text2 center hover ${path.startsWith(href) ? 'reverseWhite' : 'neonWhite hover'}`}
            {...props}>
                {children}
            </Link>
        </li>
    );
}