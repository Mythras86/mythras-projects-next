import Link from "next/link";

export default function NavUser () {

    return (
        <li className=''>
            <Link
            href={'/authentication'}
            className={'text2 center neonOrange hover'}>
                User
            </Link>
        </li>
    );
}