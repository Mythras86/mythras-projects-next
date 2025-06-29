'use server';

import { KarakterDto } from "@/app/myprojects/shadowrun-in-hungary/store/karakter.dto";
import dbConnect from "@/lib/db";
import Karakter from "./karakter.model";
import { redirect } from "next/navigation";

export async function getKarakterek() {}

export async function getOneKarakter() {}

export async function saveKarakter(karakter: KarakterDto): Promise<void> {
  await dbConnect();

  try {
    await Karakter.findOneAndUpdate({ _id: karakter._id ?? new mongoose.Types.ObjectId()}, {karakter});
  } catch (error) {
    throw error;
  }
}

export async function deleteKarakter() {}