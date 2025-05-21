import { signOut } from "next-auth/react"
import React from "react";

interface ISignOutButton {
    children: React.ReactNode;
}

export default function SignOutButton({children}: ISignOutButton) {
    return (
        <button className="neonRed hover text2 center" onClick={() => signOut({ callbackUrl: '/' })}>{children}</button>
    );
}  