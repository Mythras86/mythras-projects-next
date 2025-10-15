import Link from "next/link";

export default function NavProfile () {

  return (
    <li className=''>
      <Link
      href={'/authentication/profile'}
      className={'text2 center neonOrange hover'}>
        Profile
      </Link>
    </li>
  );
}