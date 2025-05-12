import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Authentication'
};

export default function Auth () {

  return (
    <main>
      <h1>Authentication</h1>
      <div className="flexcont margBott1">
        <div className="neonWhite text0">If you already have a Registration</div>
        <Link className='neonGreen text2 center' href="/authentication/signin">Click here to Sign In</Link>
      </div>
      <div className="flexcont margBott1">
        <div className="neonWhite text0">To Sign In, you have to Register first</div>
        <Link className='neonOrange text2 center' href="/authentication/signup">Click here to Sign Up</Link>
      </div>

    </main>
  );
}