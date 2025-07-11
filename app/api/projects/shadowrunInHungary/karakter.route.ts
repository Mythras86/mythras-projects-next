'use server';

import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import dbConnect from "@/lib/db";
import Karakter from "./karakter.schema";

export async function getKarakterek() {

  await dbConnect();

  const karakterek = await Karakter.find({}, 'orokseg.szuletesiNev');
  const karakterekConv = JSON.parse(JSON.stringify(karakterek));
  console.log(karakterekConv)
  return karakterekConv;
}

export async function getOneKarakter() {}

export async function saveKarakter(karakterData: KarakterDto): Promise<void> {

  await dbConnect();

  const karakter = new Karakter (karakterData);

  try {
    await karakter.save();
    console.log(karakter._id)
  } catch (error) {
    throw error;
  }
}

export async function deleteKarakter() {}