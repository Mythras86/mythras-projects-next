'use client';

import { useSession } from "next-auth/react";

export default function Greeting() {
    const { data: session, status} = useSession();
  
    const userName = session?.user?.name;

    return (
        <>
        {!session && 
            <h1>Welcome to my Site! :D</h1>
        }
        {session && 
            <h1>Welcome back {userName}! :3</h1>
        }
        </>
    );
}