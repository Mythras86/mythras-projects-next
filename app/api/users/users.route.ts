'use server'

import dbConnect from "@/lib/db"
import User, { IUser } from "./user.model";
import { UserDto } from "./user.dto";
import bcrypt from 'bcryptjs';

export async function getAllUsers(): Promise<IUser[]> {
    await dbConnect();
    const users = User.find();
    return users;
}

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
}

export async function deleteUser(id: string): Promise<void> {
    await dbConnect();

    try {
        await User.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
}