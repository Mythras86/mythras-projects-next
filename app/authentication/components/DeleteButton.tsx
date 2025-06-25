'use client'

import { deleteUser } from "@/app/api/users/users.route";
import { redirect } from "next/navigation";

interface Props {
    id: string;
}

function deleteAndRedirect(id: string): void {
    deleteUser(id);
    redirect('/authentication');
}

export default function DeleteButton({id}: Props) {
    return (
        <button className="neonRed hover text1 center" onClick={()=>deleteAndRedirect(id)}>Delete User</button>
    );
}