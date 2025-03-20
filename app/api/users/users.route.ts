'use server'

import dbConnect from "@/lib/db"
import { UserDto } from "./user.dto";
import bcrypt from 'bcryptjs';
import { StatusCodes } from "http-status-codes";
import User from "./user.model";

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

export async function getOneUser(email: string): Promise<any> {
    await dbConnect();

    try {
        await User.findOne({email});
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
}

export async function updateUser(user: UserDto): Promise<Error | any> {
    await dbConnect();

    try {
        await User.findOneAndUpdate({email: user.email, name: user.name});
    } catch (e) {
        if (e instanceof Error) {
            throw new Error(e.message);
        }
    }
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
}