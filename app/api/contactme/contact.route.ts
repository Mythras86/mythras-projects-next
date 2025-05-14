'use server';

import dbConnect from "@/lib/db"
import { redirect } from "next/navigation";
import { ContactDto } from "./contact.dto";
import Contact from "./contact.model";

export async function addContact(contact: ContactDto): Promise<void> {
    await dbConnect();

    const newContact = new Contact(contact);

    try {
        await newContact.save();
    } catch (error) {
        throw error;
    }

    redirect("/");
}