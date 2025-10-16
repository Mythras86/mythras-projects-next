'use server';

import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import dbConnect from "@/lib/db";
import Karakter from "./karakter.schema";
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import { IKarakterek } from "@/app/myprojects/shadowrun-in-hungary/page";

export async function getKarakterek(): Promise<IKarakterek[]> {

  await dbConnect();

  const karakterek = await Karakter.find({}, 'szuletesiNev tulajdonosEmail szuletesiNem dns foglalkozas');
  const karakterekConv = JSON.parse(JSON.stringify(karakterek));
  return karakterekConv;
}

export async function getTulajdonosNev(email: string) {
  
}

export async function getOneKarakter(_id: string): Promise<KarakterDto | undefined> {

  await dbConnect();
  
  try {
    const karakter = await Karakter.findById(_id);
    return JSON.parse(JSON.stringify(karakter));
  } catch (error) {
    throw error;
  }
}

export async function saveKarakter(karakterData: KarakterDto): Promise<void> {

  await dbConnect();

  let karakterId: mongoose.Types.ObjectId;
  
  if (karakterData._id) {
    karakterId = karakterData._id;
  } else {
    karakterId = new mongoose.Types.ObjectId();
  }


  try {
    await Karakter.findByIdAndUpdate(karakterId, karakterData, { upsert: true});
  } catch (error) {
    throw error;
  }
  redirect('/myprojects/shadowrun-in-hungary/'+karakterId)
}

export async function deleteKarakter(_id: string): Promise<void> {
  
  await dbConnect();
  
  try {
    await Karakter.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }
  
  redirect('/myprojects/shadowrun-in-hungary');
}