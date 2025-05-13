import { isMenuOpenActions } from "@/lib/store/isMenuOpen.slice";
import "./NavLogo.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";


interface INavLogo {
    isMenuOpen: boolean;
}

export default function NavLogo({isMenuOpen}: INavLogo) {

    const dispatch = useDispatch();
  
    const closeMenu = () => {
        if (isMenuOpen) {
            dispatch(isMenuOpenActions.closeMenu());
        }
    }

    const path = usePathname();

    return (
        <li id="navLogo" className={isMenuOpen ? 'open' : 'closed'} onClick={closeMenu}>
            <Link
            href={'/'}
            className={`text2 center hover ${path.endsWith('/') ? 'reversePurple' : 'neonPurple hover'}`}
            >
                Home
            </Link>
        </li>
    );
}