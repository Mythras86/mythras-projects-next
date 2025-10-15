import Link from "next/link";
interface Props {
    href: string;
    children: React.ReactNode;
    liClassName?: string;
}

export default function NavItem({href, children, liClassName}: Props) {

    return (
        <li className={liClassName}>
            <Link
            href={href}
            className={'text2 center neonPurple hover'}>
                {children}
            </Link>
        </li>
    );
}