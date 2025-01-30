import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import User from "./user.model";
import { UserDto } from "./user.dto";
import { StatusCodes } from "http-status-codes";

export async function GET() {
    try {  
        await dbConnect();  
        const users = await User.find();
        return NextResponse.json( users );  
    } catch (error) {  
        return NextResponse.json({ error });  
    }  
}

export async function POST(req: NextRequest) {  
    try {  
        await dbConnect();  
        const body: UserDto = await req.json();  
        if (body.name && body.email) {  
            const user = await User.create(body);  
            return NextResponse.json(  
                { user, message: 'Your user has been created' },  
                { status: StatusCodes.CREATED },  
            );  
        }  
        return NextResponse.json({ message: 'User name is missing' }, { status: StatusCodes.BAD_REQUEST });  
    } catch (error) {  
        return NextResponse.json({ message: error }, { status: StatusCodes.BAD_REQUEST });  
    }  
}  