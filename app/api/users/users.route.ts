'use server';

import dbConnect from "@/lib/db"
import { UserDto } from "./user.dto";
import bcrypt from 'bcryptjs';
import User from "./user.model";
import { redirect } from "next/navigation";

export async function addUser(user: UserDto): Promise<void> {
    await dbConnect();

    const newUser = new User(user);
    const salt = await bcrypt.genSalt();
    const hashedPass = await bcrypt.hash(newUser.pass, salt);
    newUser.pass = hashedPass;

    try {
        await newUser.save();
    } catch (error) {
        throw error;
    }

    redirect("/");
}

export async function getOneUser(email: string): Promise<Error | any> {
    await dbConnect();

    try {
        const user = await User.findOne({email});
        const userData= JSON.parse(JSON.stringify(user))
        return userData;
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
    redirect("/");
}

export async function updateUser(user: UserDto): Promise<any> {
    await dbConnect();

    try {
        await User.findOneAndUpdate({email: user.email, name: user.name});
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
    redirect("/profile");
}

export async function deleteUser(id: string): Promise<void> {
    await dbConnect();

    try {
        await User.findByIdAndDelete(id);
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
    redirect("/");
}