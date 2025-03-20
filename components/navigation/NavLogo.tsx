import "./NavLogo.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";


interface INavLogo {
    isMenuOpen: boolean;
}

export default function NavLogo({isMenuOpen}: INavLogo) {

    const path = usePathname();

    return (
        <li id="navLogo" className={isMenuOpen ? 'open' : 'closed'}>
            <Link
            href={'/'}
            className={`text2 center hover ${path.endsWith('/') ? 'reversePurple' : 'neonPurple hover'}`}
            >
                Home
            </Link>
        </li>
    );
}