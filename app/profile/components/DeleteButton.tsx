'use client'

import { deleteUser } from "@/app/api/auth/[...nextauth]/actions";
import { redirect } from "next/navigation";

interface IDeleteButton {
    id: string;
}

function deleteAndRedirect(id: string): void {
    deleteUser(id);
    redirect('/profile');
}

export default function DeleteButton({id}: IDeleteButton) {
    return (
        <button className="neonRed hover text1 center" onClick={()=>deleteAndRedirect(id)}>Törlés</button>
    );
}