'use client';
import useSelectHeader from "@/lib/hooks/useSelectHeader";
import Link from "next/link";

export default function NavHome () {

    const { setHeader } = useSelectHeader();

    return (
        <li className=''>
            <Link
            onClick={()=>setHeader('home')}
            href={'/'}
            className={'text2 center neonOrange hover'}>
                Home
            </Link>
        </li>

    );
}