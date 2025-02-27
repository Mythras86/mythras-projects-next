import { signOut } from "next-auth/react"

export default function SignOutButton() {
    return (
        <button className="neonRed hover text0 center" onClick={() => signOut({ callbackUrl: '/' })}>Kilépés</button>
    );
}  