'use server';

import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import dbConnect from "@/lib/db";
import Karakter from "./karakter.schema";
import { IKarakterek } from "@/app/myprojects/shadowrun-in-hungary/karakterek/components/Karakterek";
import { redirect } from "next/navigation";

export async function getKarakterek(): Promise<IKarakterek[]> {

  await dbConnect();

  const karakterek = await Karakter.find({}, 'szuletesiNev tulajdonosEmail');
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

  const karakter = new Karakter (karakterData);

  try {
    await karakter.save();
  } catch (error) {
    throw error;
  }
  redirect('/myprojects/shadowrun-in-hungary/karakterek/'+karakter._id)
}

export async function deleteKarakter(_id: string): Promise<void> {
  
  await dbConnect();

  try {
    await Karakter.findByIdAndDelete(_id);
  } catch (error) {
    throw error;
  }

}