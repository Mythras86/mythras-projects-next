import dbConnect from "@/lib/db";
import bcrypt from "bcryptjs";
import { UserDto } from "../../users/user.dto";
import User, { IUser } from "../../users/user.model";
import { handlers } from "@/auth";
export const { GET, POST } = handlers;

export async function getAllUsers(): Promise<IUser[]> {
    await dbConnect();
    const users = User.find();
    return users;
}

export async function addUser(user: UserDto): Promise<void> {

    const { email, pass, name } = user;

    try {
        await dbConnect();
        
        const checkEmail = await User.findOne({email});
        const checkName = await User.findOne({name});

        if (checkEmail) {
            throw {
                error: 'Ezzel az email címmel már regisztráltak!'
            };
        }

        if (checkName) {
            throw {
                error: 'Ezzel a névvel már regisztráltak!'
            };
        }

        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(pass, salt);
        const newUser = new User({
            name,
            email,
            pass: hashedPass
        });
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