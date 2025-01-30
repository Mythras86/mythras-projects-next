import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { StatusCodes } from "http-status-codes";
import User from "../user.model";

export async function GET(_: NextRequest, { params }: { params: { _id: string } }) {
    try {  
        await dbConnect();  
        const user = await User.findById(params._id);
        
        if (user) {
            return NextResponse.json({user});
        }
        return NextResponse.json({ message: `user ${params._id} not found` }, { status: StatusCodes.NOT_FOUND });  
    } catch (error) {  
        return NextResponse.json({ message: error }, { status: StatusCodes.BAD_REQUEST });  
    }
}

export async function PUT(req: NextRequest, { params }: { params: { _id: string } }) {
    try {  
        await dbConnect();  
        const user = await User.findById(params._id);
        
        if (user) {
            user.save();
            return NextResponse.json({user});
        }
        return NextResponse.json({ message: `User ${params._id} not found` }, { status: StatusCodes.NOT_FOUND });  
    } catch (error) {  
        return NextResponse.json({ message: error }, { status: StatusCodes.BAD_REQUEST });  
    }  
}

export async function DELETE(_: NextRequest, { params }: { params: { _id: string } }) {  
    try {  
        await dbConnect();  
        const user = await User.findById(params._id);  
        if (user) {  
            await User.findByIdAndDelete(user._id);  
            return NextResponse.json({ message: `User ${params._id} has been deleted` });  
        }  
        return NextResponse.json({ message: `User ${params._id} not found` }, { status: StatusCodes.NOT_FOUND });  
    } catch (error) {  
        return NextResponse.json({ message: error }, { status: StatusCodes.BAD_REQUEST });  
    }  
}