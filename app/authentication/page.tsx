import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Authentication'
};

export default function Auth () {

  return (
    <main>
      <h1>Authentication</h1>
      <div>
        <div className="neonWhite text1">If you already have a Registration</div>
        <Link className='neonGreen text2 center margBott1' href="/authentication/signin">Click here to Sign In</Link>
        <div className="neonWhite text1">To Sign In, you have to Register first</div>
        <Link className='neonOrange text2 center' href="/authentication/signup">Click here to Sign Up</Link>
      </div>
    </main>
  );
}